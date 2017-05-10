"use strict";
export default class OrderProcessor {
  constructor() {
  }
  processOrder(order){
    order.list.orders.forEach((orderItem)=>{
      orderItem.netPrice = orderItem.grossPrice;
    })
    order.netTotalCost = order.grossCost;
    discounts.forEach((discount)=>{
      discount(order);
    });
    return order;
  }
}
const discounts = [
function multipleExpressDeliveries(order){
  let orderArray = order.list.orders
  let deliveryMethods = order.list.orders.map((orderItem) => orderItem.deliveryMethod)
  if(deliveryMethods.filter(value => {return value === 'express'}).length >= 2){
    orderArray.forEach((orderItem)=>{
      if(orderItem.deliveryMethod === 'express'){
        orderItem.netPrice = 15;
      }
    })
  }
},
// function tenPercentDiscount(order){
//   let cost;
//   let priceArr = order.list.orders.map((order)=>{return order.netPrice});
//   cost = priceArr.reduce((previous, current)=> previous + current);
//   if(cost > 30){
//     cost -= (cost * 0.1)
//   }
//   console.log(cost);
// }
];
