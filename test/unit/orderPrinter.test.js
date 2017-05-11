import OrderPrinter from '../../src/js/order/orderPrinter';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderPrinter', () => {
  let orderPrinter;
  let processedOrder;

  beforeEach(()=>{
    orderPrinter = new OrderPrinter()
    processedOrder = {material: {clockNumber:'WNP/SWCL001/010'},
                      list:{
                        orderItems:[
                          {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'standard', grossPrice: 10, netPrice: 10},
                          {broadcasterId: 2 ,broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20, netPrice: 20}
                        ]
                      },
                      grossTotalCost: 30,
                      netTotalCost: 30,
                      appliedDiscounts: [],
                     };
  });

  it('should be able to create instances of itself', ()=> {
    expect(orderPrinter).to.be.an.instanceof(OrderPrinter);
  });

  describe('#printOrder', () => {
    it('should be responded to', () => {
      expect(orderPrinter).to.respondTo('printOrder');
    });
    it('should throw an error without an argument', ()=>{
      expect(()=>{orderPrinter.printOrder()}).to.throw(Error, 'printOrder requires a valid argument');
    });
    it('should return a string', () => {
      expect(orderPrinter.printOrder(processedOrder)).to.be.a('string')
    });
    it('should return a string with material name', () => {
      expect(orderPrinter.printOrder(processedOrder)).to.contain("Order for WNP/SWCL001/010:");
    });
    it('should return a string with a table', () => {
      expect(orderPrinter.printOrder(processedOrder)).to.contain("| broadcasterId | broadcaster | deliveryMethod | grossPrice | netPrice |\n------------------------------------------------------------------------\n|             1 | Disney      | standard       |         10 |       10 |\n|             2 | Viacom      | express        |         20 |       20 |")
    });
    it('should return a string with the gross total cost', () => {
      expect(orderPrinter.printOrder(processedOrder)).to.contain("Order Gross Total: $30.00")
    });
    it('should return a string with net total cost', () => {
      expect(orderPrinter.printOrder(processedOrder)).to.contain("Order Net Total: $30.00")
    });
    it('should return a string with any applied if they are there', () => {
      let processedOrder2 = {material: {clockNumber:'WNP/SWCL001/010'},
                              list:{
                                orderItems:[
                                  {broadcasterId: 1, broadcaster: 'Disney', deliveryMethod: 'standard', grossPrice: 10, netPrice: 10},
                                  {broadcasterId: 2, broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20, netPrice: 15},
                                  {broadcasterId: 3, broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20, netPrice: 15}
                                ]
                              },
                              grossTotalCost: 50,
                              netTotalCost: 36,
                              appliedDiscounts: [
                                'Send 2 or more materials via express delivery and the price for express delivery drops to $15',
                                'Spend over $30 to get 10% off'
                              ]
                            };
      expect(orderPrinter.printOrder(processedOrder2)).to.contain('Applied Discounts:\n- Send 2 or more materials via express delivery and the price for express delivery drops to $15\n- Spend over $30 to get 10% off\n')
    });
  });
});
