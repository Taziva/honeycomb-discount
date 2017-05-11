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
    const orderReceipt = formatOrderString(processedOrder)
    return orderReceipt;
  }
}

function formatOrderString(processedOrder) {
  let orderString = '';
  const materialNameString = `Order for ${processedOrder.material.clockNumber}:\n`;
  const tableString = stringTable.create(processedOrder.list.orderItems)
  const orderGrossTotalString = `\nOrder Gross Total: $${processedOrder.grossTotalCost.toFixed(2)}`
  const orderNetTotalString = `\nOrder Net Total: $${processedOrder.netTotalCost.toFixed(2)}\n`
  orderString += materialNameString;
  orderString += tableString;
  orderString += orderGrossTotalString;
  orderString += orderNetTotalString;
  return orderString;
}
