import Broadcaster from '../../src/js/broadcaster/broadcaster';
import {expect} from 'chai';
import sinon from 'sinon';

describe('Broadcaster', () => {
  let broadcaster;

  beforeEach(()=>{
    broadcaster = new Broadcaster('Disney');
  });

  it('should be able to create instances of itself', ()=> {
    expect(broadcaster).to.be.an.instanceof(Broadcaster);
  });

  it('should initialise with a broadcaster property', () => {
    expect(broadcaster.name).to.be.an('string');
  });

  it('should initialise with id property', () => {
    expect(broadcaster.id).to.be.a('number');
  });

  it('should return unique numbers', () => {
    let broadcaster2 = new Broadcaster('Viacom');
    expect(broadcaster2.id).to.not.eql(broadcaster.id)
  });
});
