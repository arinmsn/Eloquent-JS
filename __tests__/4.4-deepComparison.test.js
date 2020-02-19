const { deepEqual } = require("../Ch4/4.4-deepComparison");

test("return true only if two values are same or are objects with the same properties", () => {
  let obj = { here: { is: "an" }, object: 2 };
  expect(deepEqual(obj, obj)).toBeTruthy;
  expect(deepEqual(obj, { here: 1, object: 2 })).toBeFalsy;
  expect(deepEqual(obj, { here: { is: "an" }, object: 2 })).toBeTruthy;
});
