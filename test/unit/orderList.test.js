import OrderList from '../../src/js/orderList';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderList', () => {
  let orderList;

  beforeEach(()=>{
    orderList = new OrderList();
  });

  it('should be able to create instances of itself', () => {
    expect(orderList).to.be.an.instanceof(OrderList);
  });
  it('should initialise with an orders array property', () => {
    expect(orderList.orders).to.be.an('array');
  });
  describe('addOrder', () => {
    let orderItem;

    beforeEach(()=>{
      orderItem = {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'Standard', grossPrice: 10};
    });

    it('should be responded to', () => {
      expect(orderList).to.respondTo('addOrder');
    });
    it('should add an order into it\'s order array' , () => {
      orderList.addOrder(orderItem)
      expect(orderList.orders).to.include(orderItem);
    });
    describe('when passed an invalid order', () => {
      let missingId;
      let missingBroadcaster;
      let missingDeliveryMethod;
      let missingPrice;

      beforeEach(()=>{
        missingId = {broadcaster: 'Disney', deliveryMethod: 'Standard', grossPrice: 10};
        missingBroadcaster = {broadcasterId: 1, deliveryMethod: 'Standard', grossPrice: 10};
        missingDeliveryMethod = {broadcasterId: 1 ,broadcaster: 'Disney', grossPrice: 10};
        missingPrice = {broadcasterId: 1, broadcaster: 'Disney', deliveryMethod: 'Standard'};
      });

      it('should throw an error if missing an id', () => {
        expect(()=>{orderList.addOrder(missingId)}).to.throw(Error,'Order is missing a broadcaster id')
      });
      it('should throw an error if missing a broadcaster', () => {
        expect(()=>{orderList.addOrder(missingBroadcaster)}).to.throw(Error,'Order is missing a broadcaster')
      });
      it('should throw an error if missing a delivery method', () => {
        expect(()=>{orderList.addOrder(missingDeliveryMethod)}).to.throw(Error,'Order is missing a delivery method')
      });
      it('should throw an error if missing a price', () => {
        expect(()=>{orderList.addOrder(missingPrice)}).to.throw(Error,'Order is missing a price')
      });
    });
  });
});
