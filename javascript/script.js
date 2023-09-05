'use strict';


// Destructuring - ES6 feature for unpacking complex data structures and storing into variables
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({starterIndex = 0, mainIndex = 1,time = '20:00', address}) {
    console.log(`Order Received! ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`);
  },
};

// We are passing in ONE object to this function call and it will destructure right away.
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// DESTRUCTURING - UNPACKING DATA
const arr = [2, 3, 4]
const [x, y, z] = arr; // Does not mutate original array
// console.log(x, y, z);
let [first, , second] = restaurant.categories; // No need to obtain all elements
// Pre-ES6 way
// const a = [0]
// const b = [1]
// const c = [2]

// DESTRUCTURING - SWAPPING VARIABLES
[first, second] = [second, first]
// console.log(first, second);
// Pre-ES6 way
// const temp = first;
// first = second;
// second = temp;

// DESTRUCTURING - UNPACKING FUNCTION CALL
const [starter, main] = restaurant.order(2, 0)
// console.log(starter, main)

// DESTRUCTING - NESTED ARRAY
const nested = [2, 4, [5, 6]]
const [i, , [j, k]] = nested
// console.log(i, j, k);

// DESTRUCTURING - DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9] // imagine we don't know the length of the array we are unpacking
// console.log(p, q, r)

// DESTRUCTURING - OBJECTS
const {name, openingHours, categories} = restaurant // Order doesn't matter, names must match
// console.log(name, openingHours, categories)

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant // Modify Names
// console.log(restaurantName, hours, tags)

const {menu = [], starterMenu: starters = []} = restaurant // can set default values to objects that don't exist
// console.log(menu, starters)

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
//{a, b} = obj  What if we want mutate or "swap values" like we did with the array? We can't because since these var's
//              exist JS will think that the brackets have a code block rather than destructuring. You can't assign
//              anything into a codeblock.
({a, b} = obj)
// console.log(a, b)

// Nested objects + Modify Names
const {fri: {o, c}} = openingHours
// console.log(o, c);