"use strict";

export default class OrderItem {
  constructor(broadcaster, deliveryMethod) {
    this.broadcasterId = broadcaster.id;
    this.broadcaster = broadcaster.name;
    this.deliveryMethod = deliveryMethod.type;
    this.grossPrice = deliveryMethod.price;

  }
}
