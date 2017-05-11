"use strict";

export default class Broadcaster {
  constructor(name) {
    this.name = name;
    this.id = id();
  }
}

function makeId() {
  // Declares our number variable for the id and then returns a function that increments it
    let i = 1;
    return function() {
        return i++;
    }
}
// Runs makeId initialising the number variable, when called runs the returned function
let id = makeId();
