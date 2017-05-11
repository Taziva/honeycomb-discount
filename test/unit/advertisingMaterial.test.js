import AdvertisingMaterial from '../../src/js/advertisingMaterial/advertisingMaterial';
import {expect} from 'chai';
import sinon from 'sinon';

describe('AdvertisingMaterial', () =>{
  let advertisingMaterial;
  let clockNumberEnd;
  let clockNumberStart;

  before(() => {
    clockNumberStart = "WNP/JMEL001/0"
    clockNumberEnd = 10
  });

  beforeEach(()=>{
    const pattern = /\[A-Z]{3}\/[A-Z]{4}\d{3}\/\d{3}/;
    console.log(pattern.test(clockNumberStart+clockNumberEnd))
    advertisingMaterial = new AdvertisingMaterial(clockNumberStart+clockNumberEnd);
    clockNumberEnd++
  });

  it('should be able to create instances of itself', ()=> {
    expect(advertisingMaterial).to.be.an.instanceof(AdvertisingMaterial);
  });
  it('should initialise with a clockNumber string', () => {
    expect(advertisingMaterial.clockNumber).to.be.an('string');
  });
  it('should have a unique clockNumber', () => {
    let advertisingMaterial2;
    expect(()=>{advertisingMaterial2 = new AdvertisingMaterial('WNP/JMEL001/010')}).to.throw(Error,'Please supply a unique Clock Number')
  })
  it('should have a clockNumber that matches the pattern', () => {
    expect(()=>{new AdvertisingMaterial('Disney')}).to.throw(Error, 'Invalid clockNumber')
  });
});
