/*
Use the reduce method in combination with the concat method to “ﬂatten”
an array of arrays into a single array that has all the elements of the
original arrays.
*/

let arrays = [
  ["A", "B", "C"],
  ["D", "E"],
  [5, 4, 3],
  [2, 1, 0],
];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
