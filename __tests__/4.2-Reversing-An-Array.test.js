const {
  reverseArray,
  reverseArrayInPlace
} = require("../Ch4/4.2-Reversing-An-Array");

describe("produce new array that has same elements in reverse", () => {
  it("array = ['A', 'B', 'C', 'D']", () => {
    expect(reverseArray(["A", "B", "C", "D"])).toEqual(["D", "C", "B", "A"]);
  });
});

describe("modify the given array as argument and reverse its elements", () => {
  it("array = [10,9,8,7,6]", () => {
    expect(reverseArrayInPlace([10, 9, 8, 7, 6])).toEqual([6, 7, 8, 9, 10]);
  });

  it("array = [900, 800, 700, 600]", () => {
    expect(reverseArrayInPlace([900, 800, 700, 600])).toEqual([
      600,
      700,
      800,
      900
    ]);
  });
});
