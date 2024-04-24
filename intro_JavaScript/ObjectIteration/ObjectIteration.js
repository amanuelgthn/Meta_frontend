#!/usr/bin/env node


var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy () {
    for (const item in dairy) {
        console.log (dairy[item]);
    }
}

const animal = {
    canJump: true,
}

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan () {
    for (var item in bird) {
        if (bird.hasOwnProperty(item)) {
            console.log(`${item}: ${bird[item]}`);
        }
    }
}
function animalCan () {
    for (var item in bird) {
        console.log(`${item}: ${bird[item]}`);
    }
}
logDairy();
birdCan();
animalCan();