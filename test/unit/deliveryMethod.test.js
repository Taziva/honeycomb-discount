import DeliveryMethod from '../../src/js/deliveryMethod';
import {expect} from 'chai';
import sinon from 'sinon';

describe('DeliveryMethod', () => {

  let deliveryMethod;

  beforeEach(()=>{
    deliveryMethod = new DeliveryMethod('standard');
  });

  it('should be able to create instances of itself', ()=> {
    expect(deliveryMethod).to.be.an.instanceof(DeliveryMethod);
  });

  it('should initialise with a type property', () => {
    expect(deliveryMethod.type).to.be.an('string');
  });

  it('shauld have a price property', () => {
    expect(deliveryMethod).to.have.property('price');
  });

  describe('when standard delivery', () => {
    let standardDelivery;

    beforeEach(() => {
      standardDelivery = new DeliveryMethod('standard');
    });

    it('should have a price of 10', () => {
      expect(standardDelivery.price).to.equal(10);
    });
  });

  describe('when express delivery', () => {
    let expressDelivery;

    beforeEach(() => {
      expressDelivery = new DeliveryMethod('express');
    });

    it('should have a price of 20', () => {
      expect(expressDelivery.price).to.equal(20);
    });
  });

  describe('when unknown delivery method', () => {
    let unknownDelivery;

    it('should throw an error', () => {
      expect(()=>{unknownDelivery = new DeliveryMethod('unknown')}).to.throw(Error, "Unknown Delivery Method");
    });
  });
});
