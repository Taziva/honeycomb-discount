"use strict";
import OrderList from './orderList';
import {calculateGrossTotalCost} from './calculateGrossTotalCost';

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
