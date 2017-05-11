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
  uniqueClockNumbers.push(clockNumber);
  return clockNumber;
}
