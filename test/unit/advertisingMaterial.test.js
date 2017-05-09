import AdvertisingMaterial from '../../src/js/advertisingMaterial';
import {expect} from 'chai';
import sinon from 'sinon';

describe('AdvertisingMaterial', () =>{
  let advertisingMaterial;

  beforeEach(()=>{
    advertisingMaterial = new AdvertisingMaterial('Disney');
  });

  it('should be able to create instances of itself', ()=> {
    expect(advertisingMaterial).to.be.an.instanceof(AdvertisingMaterial);
  });
});
