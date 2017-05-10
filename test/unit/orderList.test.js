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
  
});
