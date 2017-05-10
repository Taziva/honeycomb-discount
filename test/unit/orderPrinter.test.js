import OrderPrinter from '../../src/js/orderPrinter';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderPrinter', () => {
  let orderPrinter;

  beforeEach(()=>{
    orderPrinter = new OrderPrinter()
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
      expect(orderPrinter.printOrder('here')).to.be.a('string')
    });
  });
});
