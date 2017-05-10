import OrderItem from '../../src/js/orderItem';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderItem', () => {
  let orderItem;
  let broadcaster;
  let deliveryMethod;
  let result;

  beforeEach(() => {
    broadcaster = {name: "Disney", id: 1};
    deliveryMethod = {name: "Standard", price: 10}
    result = {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'Standard', price: 10}
    orderItem = new OrderItem(broadcaster, deliveryMethod);
  });
  it('should be able to create instances of itself', ()=>{
    expect(orderItem).to.be.an.instanceof(OrderItem);
  });
  it('should initialise with a broadcaster property', () => {
    expect(orderItem.broadcaster).to.be.an('object');
  });

  it('should initialise with a deliveryMethod property', ()=>{
    expect(orderItem.deliveryMethod).to.be.an('object');
  });

  it('should initialise with a orderDetails property', ()=>{
    expect(orderItem.orderDetails).to.be.a('object');
  });
  describe('#createOrder', () => {
    it('should be responded to', () => {
      expect(orderItem).to.respondTo('createOrder');
    });
    it('should return an object', () => {
      expect(orderItem.createOrder()).to.be.an('object');
    });
    it('should return with the orderDetails', () => {
      expect(orderItem.createOrder()).to.eql(result);
    });
    it('should alter the orderItem orderDetails', () => {
      expect(orderItem.orderDetails).to.eql(result);
    });
  });
});
