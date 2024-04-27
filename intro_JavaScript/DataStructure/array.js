#!/usr/bin/env node
// Arrays forEach function
const fruits = ["Jablka", "Pomarancza", "Banan", "Jagody"]

function appendIndex(fruit, index) {
    console.log(`${index}.${fruit}`)
}

fruits.forEach(appendIndex)

const veggies = ['Onioin', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}.${veggie}`);
});


// filter method for arrays
const nums= [0, 10, 20, 30, 40, 50, 60];
nums.filter(function(num) {
    return num > 30;
}
)
console.log(`${nums}`);

// map method for arrays
newnums = nums.map(function(num) {
    return num / 10;
})
console.log(`${newnums}`);

// working with Maps in js

let bestBoxers = new Map()
bestBoxers.set('First', "The Champion");
bestBoxers.set('Second', "The Runner-up");
bestBoxers.set('Third', "The third place");

console.log(bestBoxers)


// working wiht sets in js

const fruitsRepeat = ['apple', 'banana', 'pear', 'orange', 'lemon', 'apple', 'banana', 'plum', 'orange']

const uniqueFruits = new Set(fruitsRepeat)
console.log(uniqueFruits)

const meal = ["Apple", "Banana", "Tomato"]

let [two] = meal
console.log(two)


let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);


// let answer = prompt("What is your name?");
// if (typeof answer === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }


const jsonStr = '{"greeting":"hello"}'

JSON.parse(jsonStr)
console.log(jsonStr)

JSON.parse(jsonStr)
const aPlainOBj = JSON.parse(jsonStr)

aPlainOBj.greeting = 'hi'
console.log(aPlainOBj)
const data = {
    firstName: "John",
    lastName: "Doe",
}

JSON.stringify(data)
console.log(data)
const [a] = [1, 2, 3, 4, 5, 6]
console.log(a)

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);
const letter = "a"
letter = "b"