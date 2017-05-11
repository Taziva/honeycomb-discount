export const calculateGrossTotalCost = function(orderList){
  let grossTotalCost;
  let grossPriceArr = orderList.orderItems.map((order)=>{return order.grossPrice});
  grossTotalCost = grossPriceArr.reduce((previous, current)=> previous + current);
  return grossTotalCost;
}