"use strict";

export default class OrderItem {
  constructor(broadcaster, deliveryMethod) {
    this.broadcaster = broadcaster;
    this.deliveryMethod = deliveryMethod;
    this.orderDetails = this.createOrder();
  }
  createOrder(){
    let details = { broadcasterId: this.broadcaster.id,
      broadcaster: this.broadcaster.name,
      deliveryMethod: this.deliveryMethod.name,
      price: this.deliveryMethod.price
    }
    return details;
  }
}
