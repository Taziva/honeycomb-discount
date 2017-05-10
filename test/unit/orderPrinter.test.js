import OrderPrinter from '../../src/js/orderPrinter';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderPrinter', () => {
  let orderPrinter;
  let orderList;

  beforeEach(()=>{
    orderPrinter = new OrderPrinter()
    orderList = [{name:"Sho", age:24, condition: 'alive'}]
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
      expect(orderPrinter.printOrder(orderList)).to.be.a('string')
    });
  });
});
