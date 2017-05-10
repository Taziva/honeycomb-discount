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
    deliveryMethod = {type: "Standard", price: 10}
    result = {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'Standard', grossPrice: 10}
    orderItem = new OrderItem(broadcaster, deliveryMethod);
  });
  it('should be able to create instances of itself', ()=>{
    expect(orderItem).to.be.an.instanceof(OrderItem);
  });
  it('should initialise with a broadcaster property', () => {
    expect(orderItem.broadcaster).to.be.an('string');
  });

  it('should initialise with a deliveryMethod property', ()=>{
    expect(orderItem.deliveryMethod).to.be.an('string');
  });

  it('should initialise with a broadcasterId property', ()=>{
    expect(orderItem.broadcasterId).to.be.a('number');
  });
  it('should initialise with a grossPrice property', ()=>{
    expect(orderItem.broadcasterId).to.be.a('number');
  });
});
