//exercie 1
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// Promise.all() takes an iterable (such as an array) of promises or values and returns a single Promise.
// It waits until all input items have fulfilled, then resolves with an array of their results in the exact
// same order as the input array (regardless of how long each takes—so it waits 3 seconds for promise3).
// Non-promise values like 42 are automatically wrapped with Promise.resolve(42).
// If any single promise rejects, Promise.all() immediately rejects with that rejection reason.

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); 
  })
  .catch((error) => {
    console.error(error);
  });

//exercie 2
// Output: [2, 4, 6]