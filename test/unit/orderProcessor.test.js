import OrderProcessor from '../../src/js/order/orderProcessor';
import Order from '../../src/js/order/order';
import {expect} from 'chai';
import sinon from 'sinon';

describe('OrderProcessor', () => {
  let orderProcessor;
  let order;
  let orderList;
  let orderItem;

  beforeEach(()=>{
    orderItem  = {broadcasterId: 2, broadcaster: 'ITV', deliveryMethod: 'standard', grossPrice: 10};
    order = sinon.stub(new Order('Something'))
    order.list.orderItems.push(orderItem)
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
      expect(processedOrder.list.orderItems[0]).to.have.property('netPrice');
      expect(processedOrder.list.orderItems[0].netPrice).to.equal(orderItem.netPrice)
    });
    it('should return a modified version of arguments passed with a netCost property', () => {
      let processedOrder = orderProcessor.processOrder(order);
      expect(processedOrder).to.have.property('netTotalCost');
      expect(processedOrder.netTotalCost).to.equal(10);
    });
    describe('when the following discount conditions are met', () => {
      describe('- if 2 or more materials are sent via express delivery', () => {
        describe('#multipleExpressDeliveries', () => {
          let orderItem2;
          beforeEach(() => {
            orderItem2 = {broadcasterId: 1 ,broadcaster: 'Viacom', deliveryMethod: 'express', grossPrice: 20};
            order.list.orderItems.push(orderItem2);
          });
          it('should not change the netPrice if theres only 1 express delivery', () => {
            let processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.list.orderItems[0].netPrice).to.equal(10);
          })
          it('should not change the netPrice of standard delivery', ()=>{
            let processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.list.orderItems[0].netPrice).to.equal(10);
          })
          it('should decrease the netPrice to $15', () => {
            let orderItem3 = {broadcasterId: 3 ,broadcaster: 'Disney', deliveryMethod: 'express', grossPrice: 20};
            order.list.orderItems.push(orderItem3);
            let processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.list.orderItems[1].netPrice).to.equal(15);
            expect(processedOrder.list.orderItems[2].netPrice).to.equal(15);
          });
          it('should change the netTotalCost of the order', ()=>{
            let processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.netTotalCost).to.equal(30)
            let orderItem3 = {broadcasterId: 3 ,broadcaster: 'Disney', deliveryMethod: 'express', grossPrice: 20};
            order.list.orderItems.push(orderItem3);
            processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.netTotalCost).to.equal(36);
          })
        });
      });
      describe('- if the netCost is over $30', () => {
        describe('#tenPercentDiscount', () => {
          let orderItem4;
          let orderItem5;
          beforeEach(() => {
            orderItem4 = {broadcasterId: 4, broadcaster: 'Horse and Country', deliveryMethod: 'express', grossPrice: 20};
            orderItem5 = {broadcasterId: 5, broadcaster: 'Channel 4', deliveryMethod: 'standard', grossPrice: 10};
            order.list.orderItems.push(orderItem4);
          });
          it('should not take off 10% if the netTotalCost is $30 or under', () => {
            let processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.netTotalCost).to.equal(30);
          });
          it('should take 10% off the netTotalCost', () => {
            order.list.orderItems.push(orderItem5);
            let processedOrder = orderProcessor.processOrder(order);
            expect(processedOrder.netTotalCost).to.equal(36);
          });
        });
      });
    });
  });
});
