import { flr, getFlr } from "./ES6_module1.js";

console.log(flr[0]);
console.log(getFlr(3));

import * as animals from "./ES6_module2.js";

import { showAnimals, animals } from "./ES6_module2.js";
console.log(animals[1]);
animals.showAnimals();

import sayHi from "./module.js";
sayHi();
