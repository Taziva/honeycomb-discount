"use strict";

export default class OrderList {
  constructor() {
    this.orders = [];
  }
  addOrder(order){
    if(validOrder(order)){
      this.orders.push(order);
    }
  }
}

const validOrder = function(order){
  if(!order.broadcasterId){
    throw Error('Order is missing a broadcaster id');
  }
  if (!order.broadcaster) {
    throw Error('Order is missing a broadcaster');
  }
  if (!order.deliveryMethod) {
    throw Error('Order is missing a delivery method');
  }
  if (!order.price) {
    throw Error('Order is missing a price');
  }
  return true;
}
