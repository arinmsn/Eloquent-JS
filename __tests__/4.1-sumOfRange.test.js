const { range, sum } = require("../Ch4/4.1-sumOfRange");

describe("return an array containing the numbers from start to end", () => {
  it("array = [1,2,3,4,5,6,7,8,9,10]", () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
