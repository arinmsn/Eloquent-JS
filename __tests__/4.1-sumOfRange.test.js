const { range, sum } = require("../Ch4/4.1-sumOfRange");

describe("return an array containing the numbers from start to end", () => {
  it("array = [1,2,3,4,5,6,7,8,9,10]", () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe("return range of numbers from start to end, utilizing 3rd optional argument, step", () => {
  it("array = [5, 4, 3, 2], step = -1", () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });

  it("array = [3,5,7,9], step = 2", () => {
    expect(range(3, 10, 2)).toEqual([3, 5, 7, 9]);
  });
});

describe("return the sum of the numbers in array", () => {
  it("array = [1,2,3,4,5,6,7,8,9,10]", () => {
    expect(sum(range(1, 10))).toEqual(55);
  });
});
