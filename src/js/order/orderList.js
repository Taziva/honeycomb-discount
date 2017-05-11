"use strict";

export default class OrderList {
  constructor() {
    this.orderItems = [];
  }
  addOrder(orderItem){
    // Checks the orderItem has the correct information and then adds it to the array list
    if(!orderItem.broadcasterId){
      throw Error('OrderItem is missing a broadcaster id');
    }
    if (!orderItem.broadcaster) {
      throw Error('OrderItem is missing a broadcaster');
    }
    if (!orderItem.deliveryMethod) {
      throw Error('OrderItem is missing a delivery method');
    }
    if (!orderItem.grossPrice) {
      throw Error('OrderItem is missing a price');
    }
    this.orderItems.push(orderItem);
  }
}
