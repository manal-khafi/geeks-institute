const _ = require("lodash");
const { add, multiply } = require("./math");

const sum = add(10, 25);
const product = multiply(6, 7);
const shuffled = _.shuffle([1, 2, 3, 4, 5]);
const capitalized = _.capitalize("hello node");

console.log({ sum, product, shuffled, capitalized });