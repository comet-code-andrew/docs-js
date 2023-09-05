// SPREAD OPERATOR
const arr = [7, 8, 9]
const newArr = [1, 2, ...arr]
console.log(newArr) // 1, 2, 7, 8, 9
// Pre-ES6 way
// const badNewArr = [1, 2, arr[0], arr[1], arr[2] ]


// SPREAD OPERATOR - Shallow copies
const mainMenu = ['Pizza', 'Pasta', 'Risotto']
const mainMenuCopy = [...mainMenu]


// SPREAD OPERATOR - Join 2 arrays
const starterMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
const menuCombined = [...mainMenu, ...starterMenu]


// SPREAD OPERATOR - Iterables (arrays, strings, maps, sets, NOT OBJECTS)
const str = "tacoMan"
const letters = [...str, '', 'S.']


// SPREAD OPERATOR - Common use case
orderPasta = function(ing1, ing2, ing3) {
  console.log(`Ingredients selected are ${ing1}, ${ing2} and ${ing3}`)
}
const ingredients = [
  prompt('Lets make pasta! Ingredient 1?'),
  prompt('Lets make pasta! Ingredient 2?'),
  prompt('Lets make pasta! Ingredient 3?')
]
orderPasta(...ingredients)
// Pre-ES6
// orderPasta(ingredients[0], ingredients[1], ingredients[2])


// SPREAD OPERATOR - Objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
}
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Taco Man'}

// SPREAD OPERATOR - Objects - shallow copy
const restaurantCopy = {...newRestaurant}
