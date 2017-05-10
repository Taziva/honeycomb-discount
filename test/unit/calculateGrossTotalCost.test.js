import {calculateGrossTotalCost} from '../../src/js/calculateGrossTotalCost';
import OrderList from '../../src/js/orderList';
import {expect} from 'chai';
import sinon from 'sinon';

describe('calculateGrossTotalCost', () => {
  let orderList;
  let orderItem;
  let orderItem2;
  beforeEach(() => {
    orderList = sinon.stub(new OrderList)
    orderItem = {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'express', grossPrice: 10};
    orderItem2 = {broadcasterId: 2 ,broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20};
    orderList.orderItems.push(orderItem, orderItem2)
  });
  it('should return a number', () => {
    expect(calculateGrossTotalCost(orderList)).to.be.a('number');
  });
  it('should return a grossTotalCost', () => {
    expect(calculateGrossTotalCost(orderList)).to.equal(30);
  });
});
