/*

Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property that can be "ltr" (left to right),
"rtl" (right to left), or "ttb" (top to bottom). The dominant direction is the direction of 
 majority of the characters that have a script associated with them. The characterScript
 and countBy functions deﬁned earlier in the chapter are probably useful here.

*/

function dominantDirection(text) {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => != "none");

  if (counted.length == 0) return "ltr";
  return counted.reduce((a,b) => a.count > b.coutn ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
