//exercice 1
// Output: [2, 4, 6]

//exercice 2
// Output: [1, 2, 0, 1, 2, 3]

//exercice 3
// The value of i represents the index of the element in the array during each iteration. 
// It takes the values: 0, 1, 2, 3, 4, and 5 sequentially.

//exercice 4
// 1. & 2
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const modifiedArray = array.flat(2);

// 3
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const modifiedGreeting = greeting.map(subArr => subArr.join(" "));

// 4
const greetingString = greeting.map(subArr => subArr.join(" ")).join(" ");

// 5
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const freed = trapped.flat(Infinity);