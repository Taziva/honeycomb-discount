export const calculateGrossTotalCost = function(orderList){
  // Calculates the price of the order before discounts are applied
  let grossTotalCost;
  let grossPriceArr = orderList.orderItems.map((order)=>{return order.grossPrice});
  grossTotalCost = grossPriceArr.reduce((previous, current)=> previous + current);
  return grossTotalCost;
}
