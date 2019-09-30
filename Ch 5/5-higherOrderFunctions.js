// Run code here in the context of Chapter 5

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

/*  Exercises
    ====================================
    5.1 Flattening
    Flattening
    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of the original arrays.

    let arrays = [[1, 2, 3], [4, 5], [6]];
    // Your code here.
    // → [1, 2, 3, 4, 5, 6]

*/

arrays.reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

console.log(
  arrays.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  )
);

// Solution:
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

/*  

5.2 Your own loop

Write a higher-order function loop that provides something like a for loop statement.
It takes a value, a test function, an update function, and a body function. Each iteration,
it first runs the test function on the current loop value and stops if that returns false.
Then it calls the body function, giving it the current value. Finally, it calls the update
function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.

// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1}

*/

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

/*  

5.3 Everything

Analogous to the some method, arrays also have an every method. This one returns true
when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays,
and every is like the && operator.

Implement every as a function that takes an array and a predicate
function as parameters. Write two versions, one using a loop and one using the some method.

function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

HINT: Like the && operator, the every method can stop evaluating further
elements as soon as it has found one that doesn’t match. So the loop-based
version can jump out of the loop—with break or return—as soon as it runs
into an element for which the predicate function returns false. If the loop
runs to its end without finding such an element, we know that all elements
matched and we should return true.

To build every on top of some, we can apply De Morgan’s laws, which state
that a && b equals !(!a || !b). This can be generalized to arrays, where all
elements in the array match if there is no element in the array that does not match.

*/

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

/*

5.4 Dominant writing direction

Write a function that computes the dominant writing direction 
in a string of text. Remember that each script object has a
direction property that can be "ltr" (left to right), "rtl" 
(right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the
characters that have a script associated with them. The
characterScript and countBy functions defined earlier in
the chapter are probably useful here.

function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

Your solution might look a lot like the first half of the
textScripts example. You again have to count characters by
a criterion based on characterScript and then filter out the
part of the result that refers to uninteresting (script-less) characters.

Finding the direction with the highest character count can be
done with reduce. If it’s not clear how, refer to the example
earlier in the chapter, where reduce was used to find the script
with the most characters.

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

*/

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}
