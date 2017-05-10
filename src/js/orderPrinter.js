"use strict";
import stringTable from 'string-table';

export default class OrderPrinter {
  constructor() {
  }
  printOrder(order){
    if(!order){
      throw Error('printOrder requires a valid argument')
    }
    let table = stringTable.create(order)
    return table;
  }
}
