#!/usr/bin/env node

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}


var eagle1 = Object.create(bird);

console.log(eagle1)