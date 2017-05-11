"use strict";
// Discounts applied to each order
// In the order of the way you want the discounts to be applied

export function multipleExpressDeliveries(order){
  // If there are 2 or more express deliveries in the order the cost of each is reduced to $15
  let deliveryMethods = order.list.orderItems.map((orderItem) => orderItem.deliveryMethod)
  if(deliveryMethods.filter(value => {return value === 'express'}).length >= 2){
    order.list.orderItems.forEach((orderItem)=>{
      if(orderItem.deliveryMethod === 'express'){
        orderItem.netPrice = 15;
      }
    })
    order.appliedDiscounts.push('Send 2 or more materials via express delivery and the price for express delivery drops to $15');
  }
  return order;
}

export function tenPercentDiscount(order){
  // If the total net price after discounts are applied is over $30 take 10% off the total net cost
  let cost;
  let priceArr = order.list.orderItems.map((order)=>{return order.netPrice});
  cost = priceArr.reduce((previous, current)=> previous + current);
  if(cost > 30){
    cost -= (cost * 0.1)
    order.appliedDiscounts.push('Spend over $30 to get 10% off');
  }
  order.netTotalCost = cost;
  return order;
}
