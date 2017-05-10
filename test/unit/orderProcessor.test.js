import OrderProcessor from '../../src/js/orderProcessor';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderProcessor', () => {
  let orderProcessor;
  let order;
  let orderList;
  let orderItem;


  beforeEach(()=>{
    orderItem = {broadcasterId: 1, broadcaster: 'ITV', deliveryMethod: 'standard', grossPrice: 10};
    orderList = {orders:[orderItem]}
    order = {list:orderList}
    orderProcessor = new OrderProcessor();
  });

  it('should be able to create instances of itself', () => {
    expect(orderProcessor).to.be.an.instanceof(OrderProcessor);
  });

  describe('#processOrder', () => {
    it('should be responded to', () => {
      expect(orderProcessor).to.respondTo('processOrder')
    });
    it('should return a modified version of arguments passed with a netPrice property',() => {
      let processedOrder = orderProcessor.processOrder(order);
      expect(processedOrder.list.orders[0]).to.have.property('netPrice');
      expect(processedOrder.list.orders[0].netPrice).to.equal(orderItem.netPrice)
    });
    it('should return a modified version of arguments passed with a netCost property', () => {
      let processedOrder = orderProcessor.processOrder(order);
      expect(processedOrder).to.have.property('netTotalCost');
    });
    describe('when discount conditions are met', () => {
      describe('#if 2 or more materials are sent via express delivery', () => {
        let orderItem2;
        beforeEach(() => {
          orderItem2 = {broadcasterId: 1 ,broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20};
          order.list.orders.push(orderItem2);
        });
        it('should not change the netPrice if theres only 1 express delivery', () => {
          let processedOrder = orderProcessor.processOrder(order);
          expect(processedOrder.list.orders[1].netPrice).to.equal(20);
        })
        it('should decrease the netPrice to $15', () => {
          let orderItem3 = {broadcasterId: 1 ,broadcaster: 'Disney', deliveryMethod: 'express', grossPrice: 20};
          order.list.orders.push(orderItem3);
          let processedOrder = orderProcessor.processOrder(order);
          expect(processedOrder.list.orders[1].netPrice).to.equal(15);
          expect(processedOrder.list.orders[2].netPrice).to.equal(15);
        });
        it('should not change the netPrice of standard delivery', ()=>{
          let processedOrder = orderProcessor.processOrder(order);
          expect(processedOrder.list.orders[0].netPrice).to.equal(10);
        })
      });
      describe('#if the netCost is over $30 take 10% off', function(){
        let orderItem4;
        beforeEach(() => {
          orderItem4 = {broadcasterId: 1 ,broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20};
          orderList2 = {orders:[orderItem4]}
          order2 = {list:orderList2}
          order
        });
      });
    });
  });
});
