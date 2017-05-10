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

  it('should initialise with a orderlist object property', () => {
    expect(order).to.have.property('list')
    expect(order.list).to.be.an('object');
  });

  it('should initialise with a cost number property', ()=>{
    expect(order.cost).to.be.a('number');
    expect(order.cost).to.equal(0);
  });

  it('should initialise with a material string property', ()=>{
    expect(order.material).to.be.a('string');
    expect(order.material).to.equal(fakeMaterialName);
  })

  describe('#addOrderItem', () => {
    let orderItem;

    beforeEach(() => {
      orderItem = {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'Standard', price: 10};
    });

    it('should be responded to', ()=>{
      expect(order).to.respondTo('addOrderItem');
    });
    it('should throw an error without an argument', ()=>{
      expect(()=>{order.addOrderItem()}).to.throw(Error, 'addOrderItem needs a argument');
    });
    it('should add the received argument to the order list', () => {
      order.addOrderItem(orderItem)
      expect(order.list.orders).to.include(orderItem);
    });
  });
  describe('Cost', () => {
    describe('when orders are added to the order list', () => {
      let orderItem2;
      let orderItem3;
      let orderItem4;

      beforeEach(() => {
        orderItem2 = {broadcasterId: 2, broadcaster: 'Viacom', deliveryMethod: 'Standard', price: 10};
        orderItem3 = {broadcasterId: 3, broadcaster: 'Discovery', deliveryMethod: 'Express', price: 20};
        orderItem4 = {broadcasterId: 4, broadcaster: 'ITV', deliveryMethod: 'Express', price: 20};
        order.addOrderItem(orderItem2);
        order.addOrderItem(orderItem3);
      });

      it('should change the order cost', () => {
        expect(order.cost).to.equal(30)
      });

      it('should change the order cost when more ordersItems are added', () => {
        order.addOrderItem(orderItem4);
        expect(order.cost).to.equal(50)
      });
    });
  });
  describe('#showOrder', () => {
    it('should be responded to', ()=>{
      expect(order).to.respondTo('showOrder');
    });
  });
});
