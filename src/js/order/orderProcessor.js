"use strict";
export default class OrderProcessor {
  constructor() {
  }
  processOrder(order){
    order.list.orderItems.forEach((orderItem)=>{
      orderItem.netPrice = orderItem.grossPrice;
    })
    order.netTotalCost = order.grossTotalCost;
    discounts.forEach((discount)=>{
      order = discount(order);
      if(order.netTotalCost >= calculateNetTotalCost(order)){
        order.netTotalCost = calculateNetTotalCost(order);
      };
    });
    return order;
  }
}

const discounts = [
function multipleExpressDeliveries(order){
  let deliveryMethods = order.list.orderItems.map((orderItem) => orderItem.deliveryMethod)
  if(deliveryMethods.filter(value => {return value === 'express'}).length >= 2){
    order.list.orderItems.forEach((orderItem)=>{
      if(orderItem.deliveryMethod === 'express'){
        orderItem.netPrice = 15;
      }
    })
  }
  return order;
},
function tenPercentDiscount(order){
  let cost;
  let priceArr = order.list.orderItems.map((order)=>{return order.netPrice});
  cost = priceArr.reduce((previous, current)=> previous + current);
  if(cost > 30){
    cost -= (cost * 0.1)
  }
  order.netTotalCost = cost;
  return order;
}
];

function calculateNetTotalCost(order){
  let netTotalCost;
  let netPriceArr = order.list.orderItems.map((order)=>{return order.netPrice});
  netTotalCost = netPriceArr.reduce((previous, current)=> previous + current);
  return netTotalCost;
}
