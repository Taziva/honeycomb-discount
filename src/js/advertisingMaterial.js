"use strict";

export default class AdvertisingMaterial {
  constructor(clockNumber) {
    this.clockNumber = checkUnique(clockNumber);
  }
}

let uniqueClockNumbers = [];

const checkUnique = function(clockNumber){
  if(uniqueClockNumbers.indexOf(clockNumber) > -1){
    throw Error('Please supply a unique Clock Number')
  }
  uniqueClockNumbers.push(clockNumber);
  return clockNumber;
}
