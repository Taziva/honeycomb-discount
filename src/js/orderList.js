"use strict";

export default class OrderList {
  constructor() {
    this.orderItems = [];
  }
  addOrder(orderItem){
    if(validOrder(orderItem)){
      this.orderItems.push(orderItem);
    }
  }
}

const validOrder = function(orderItem){
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
  return true;
}
