"use strict";
import OrderList from './orderList';

export default class Order {
  constructor(material) {
    this.list = new OrderList;
    this.grossTotalCost = 0;
    this.material = material;
  }
  addOrderItem(order){
    if(!order){
      throw Error('addOrderItem needs a argument')
    }
    this.list.addOrder(order)
    this.grossTotalCost = calculateGrossTotalCost(this.list)
  }
}

const calculateGrossTotalCost = function(orderList){
  let cost;
  let priceArr = orderList.orders.map((order)=>{return order.grossPrice});
  cost = priceArr.reduce((previous, current)=> previous + current);
  return cost;
}
