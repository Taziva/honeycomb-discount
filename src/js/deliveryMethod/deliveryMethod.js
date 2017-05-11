"use strict";

export default class DeliveryMethod {
  constructor(type) {
    this.type = type.toLowerCase();
    this.price = this.checkPrice(type);
  }
  checkPrice(type){
    switch (type) {
      case "standard":
        return 10;
      case "express":
        return 20;
      default:
        throw Error("Unknown Delivery Method")
    }
  }
}
