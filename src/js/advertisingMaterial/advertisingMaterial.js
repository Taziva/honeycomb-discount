"use strict";

export default class AdvertisingMaterial {
  constructor(clockNumber) {
    this.clockNumber = checkUnique(clockNumber);
  }
}
// An array of unique clock Numbers
let uniqueClockNumbers = [];

const checkUnique = function(clockNumber){
  // Checks against the uniqueClockNumbers array to make sure new clockNumbers are unique
  if(uniqueClockNumbers.indexOf(clockNumber) > -1){
    throw Error('Please supply a unique Clock Number')
  }
  if(!validClockNumber(clockNumber)){
    throw Error('Invalid clockNumber');
  }
  uniqueClockNumbers.push(clockNumber);
  return clockNumber;
}

const validClockNumber = function(clockNumber) {
  const pattern = /[A-Z]{3}\/[A-Z]{4}\d{3}\/\d{3}/;
  if(!pattern.test(clockNumber)){
    return false;
  }
  return true
}
