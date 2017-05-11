"use strict";

import * as discounts from './discounts/discounts';

export default class OrderProcessor {
  constructor() {
  }
  processOrder(order){
    //Takes an order and applies calculates the net total cost by apply discounts from the discounts array;
    order.list.orderItems.forEach((orderItem)=>{
      orderItem.netPrice = orderItem.grossPrice;
    })
    order.appliedDiscounts = [];
    order.netTotalCost = order.grossTotalCost;
    for (const key in discounts){
      order = discounts[key](order);
      if(order.netTotalCost >= calculateNetTotalCost(order)){
        order.netTotalCost = calculateNetTotalCost(order);
      };
    }
    return order;
  }
}

function calculateNetTotalCost(order){
  // Calculates the net total cost of the order
  let netTotalCost;
  let netPriceArr = order.list.orderItems.map((order)=>{return order.netPrice});
  netTotalCost = netPriceArr.reduce((previous, current)=> previous + current);
  return netTotalCost;
}
