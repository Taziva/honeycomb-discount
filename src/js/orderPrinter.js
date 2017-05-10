"use strict";
import stringTalbe from 'string-table';

export default class OrderPrinter {
  constructor() {
  }
  printOrder(order){
    if(!order){
      throw Error('printOrder requires a valid argument')
    }

    return order;
  }
}
