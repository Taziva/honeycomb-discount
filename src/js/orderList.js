"use strict";

export default class OrderList {
  constructor() {
    this.orders = [];
  }
  addOrder(order){
    if(!invalidOrder(order)){}
    this.orders.push(order);
  }
}

let invalidOrder = function(order){
  if(!order.broadcasterId){
    throw Error('Order is missing a broadcaster id');
    return false;
  }
  if (!order.broadcaster) {
    throw Error('Order is missing a broadcaster');
    return false;
  }
  if (!order.deliveryMethod) {
    throw Error('Order is missing a delivery method');
    return false;
  }
  if (!order.price) {
    throw Error('Order is missing a price');
    return false;
  }
  return true;
}
