/*

The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up
to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example 
program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” 
value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
Building up an array is most easily done by first initializing a binding to [] (a fresh, empty array) and repeatedly
calling its push method to add a value. Don’t forget to return the array at the end of the function.

Since the end boundary is inclusive, you’ll need to use the <= operator rather than < to check for the end of your loop.

The step parameter can be an optional parameter that defaults (using the = operator) to 1.

Having range understand negative step values is probably best done by writing two separate loops—one for counting up and one for counting down—because the comparison that checks whether the loop is finished needs to be >= rather than <= when counting downward.

It might also be worthwhile to use a different default step, namely, -1, when the end of the range is smaller than the start.
That way, range(5, 2) returns something meaningful, rather than getting stuck in an infinite loop.
It is possible to refer to previous parameters in the default value of a parameter.


*/

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }
  
  function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }
  
  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55