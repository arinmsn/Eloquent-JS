const { arrayToList, listToArray, prepend, nth } = require("../Ch4/4.3-aList");

test("Use given array to build up a list structure", () => {
  expect(arrayToList([10, 20])).toEqual({
    value: 10,
    rest: { value: 20, rest: null }
  });
});

test("produces an array from a list", () => {
  expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
});

test("take an element and a list and creates a new list that adds the element to the front of the input list", () => {
  expect(prepend(10, prepend(20, null))).toEqual({
    value: 10,
    rest: { value: 20, rest: null }
  });
});

/*  takes a list and a number and returns the element at
    the given position in the list (with zero referring to
    the first element) or undefined when there is no such element
*/
test("take a list and a number and return the element at the given position", () => {
  expect(nth(arrayToList([10, 20, 30]), 1)).toEqual(20);
});
