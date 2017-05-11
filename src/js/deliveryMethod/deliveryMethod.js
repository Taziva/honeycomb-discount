"use strict";

export default class DeliveryMethod {
  constructor(type) {
    this.type = type.toLowerCase();
    this.price = this.checkPrice(type);
  }
  checkPrice(type){
    // Checks if the delivery method is a accepted form of delivery that honeycomb offers
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
