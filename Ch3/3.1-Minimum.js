/*
    Build something similiar to Math.min now.
    Write a function min that takes two arguments
    and returns their minimum.

    console.log(min(0, 10));
    // → 0

    console.log(min(0, -10));
    // → -10
*/

function min(a, b) {
  if (a < b) return a;
  else return b;
}
