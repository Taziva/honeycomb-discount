"use strict";
import stringTable from 'string-table';

export default class OrderPrinter {
  constructor() {
  }
  printOrder(processedOrder){
    // Returns a string of the order with a title a table with the order details and the Net Order Total
    if(!processedOrder){
      throw Error('printOrder requires a valid argument')
    }
    let orderString = '';
    let materialNameString = `Order for ${processedOrder.material.clockNumber}:\n`;
    let tableString = stringTable.create(processedOrder.list.orderItems)
    let orderTotalString = `\nOrder Total: $${processedOrder.netTotalCost.toFixed(2)}`
    orderString += materialNameString;
    orderString += tableString;
    orderString += orderTotalString;
    return orderString;
  }
}
