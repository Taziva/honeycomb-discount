import Order from '../../src/js/order';
import {expect} from 'chai';
import sinon from 'sinon';

describe('Order', ()=>{
  let order;
  let orderList;
  let fakeMaterialName

  beforeEach(()=>{
    fakeMaterialName = 'WNP/SWCL001/010';
    order = new Order(fakeMaterialName);

  });

  it('should be able to create instances of itself', () => {
    expect(order).to.be.an.instanceof(Order);
  });

  it('should initialise with a list array property', () => {
    expect(order.list).to.be.an('array');
  });

  it('should initialise with a cost number property', ()=>{
    expect(order.cost).to.be.a('number');
  });

  it('should initialise with a material string property', ()=>{
    expect(order.material).to.be.a('string');
    expect(order.material).to.equal(fakeMaterialName);
  })

  describe('#addOrderItem', () => {
    let orderItem;

    beforeEach(function(){
      orderItem = {broadcaster: "Disney", deliveryMethod: "Express"}
    });

    it('should be responded to', ()=>{
      expect(order).to.respondTo('addOrderItem');
    });
    it('should throw an error without an argument', ()=>{
      expect(()=>{order.addOrderItem()}).to.throw(Error, 'addOrderItem needs a argument');
    });
    it('should add the received argument to the order list', () => {
      order.addOrderItem(orderItem)
      expect(order.list).to.include(orderItem);
    });
  });
  describe('#calculateCost', () => {
    it('should be responded to', ()=>{
      expect(order).to.respondTo('calculateCost');
    });
  });
  describe('#showOrder', () => {
    it('should be responded to', ()=>{
      expect(order).to.respondTo('showOrder');
    });
  });
});
