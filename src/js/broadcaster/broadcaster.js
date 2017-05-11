"use strict";

export default class Broadcaster {
  constructor(name) {
    this.name = name;
    this.id = id();
  }
}

function makeId() {
    let i = 1;
    return function() {
        return i++;
    }
}

let id = makeId();
