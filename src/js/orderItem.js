"use strict";

export default class OrderItem {
  constructor(broadcaster, deliveryMethod) {
    this.broadcaster = broadcaster;
    this.deliveryMethod = deliveryMethod;
    this.orderDetails = {broadcasterID: '' ,broadcaster: '', deliveryMethod: '', price: 0}
  }
  createOrder(){
    
  }
}
