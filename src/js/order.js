"use strict";

export default class Order {
  constructor(material, list = [], cost = 0) {
    this.list = list;
    this.cost = cost;
    this.material = material
  }
  addOrderItem(order){
    if(!order){
      throw Error('addOrderItem needs a argument')
    }
    this.list.push(order)
  }
  calculateCost(){

  }
  showOrder(){

  }
}
