"use strict";
import OrderList from './orderList';
import {calculateGrossTotalCost} from './calculateGrossTotalCost';

export default class Order {
  constructor(material) {
    this.list = new OrderList;
    this.grossTotalCost = 0;
    this.material = material;
  }
  addOrderItem(orderItem){
    // Adds an orderItem to this order's orderList
    if(!orderItem){
      throw Error('addOrderItem needs a argument')
    }
    this.list.addOrder(orderItem)
    this.grossTotalCost = calculateGrossTotalCost(this.list)
  }
}
