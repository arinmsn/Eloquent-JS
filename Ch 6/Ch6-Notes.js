/*
Encapsulation
The core idea in object-oriented programming is to divide programs
into smaller pieces and make each piece responsible for managing its own state.

Different pieces of such a program interact with each other through *interfaces*,
limited sets of functions or bindings that provide useful functionality at a more
abstract level, hiding their precise implementation.

Such program pieces are modeled using objects. Their interface consists of a specific
set of methods and properties. Properties that are part of the interface are called public.
The others, which outside code should not be touching, are called private.

Typically, the available interface is described in documentation or comments.
It is also common to put an underscore (_) character at the start of property names
to indicate that those properties are private.

Separating interface from implementation is a great idea. It is usually called encapsulation.
*/

// Methods are nothing more than properties that hold function values.
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'

/*
When a function is called as a method—looked up as a property and immediately called,
as in object.method()—the binding called this in its body automatically points at the
object that it was called on.

*/

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// → The white rabbit says 'Oh my ears and whiskers, how
//   late it's getting!'
hungryRabbit.speak("I could use a carrot right now.");
// → The hungry rabbit says 'I could use a carrot right now.'

/*
You can think of 'this' as an extra parameter that is passed in a different way.
If you want to pass it explicitly, you can use a function’s call method, which
takes the this value as its first argument and treats further arguments as
normal parameters.
*/

speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

/*
Arrow functions are different—they do not bind their own this but can see
the this binding of the scope around them. Thus, you can do something like
the following code, which references this from inside a local function:
*/

// If argument to map was written using 'function' keyword,
// code wouldn't work.
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]

// Prototypes

// Watch Closely
let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

/*
In addition to their set of properties, most objects also have a prototype.
A prototype is another object that is used as a fallback source of properties.
When an object gets a request for a property that it does not have, its prototype
will be searched for the property, then the prototype’s prototype, and so on.

So who is the prototype of that empty object?
It is the great ancestral prototype,
the entity behind almost all objects,  Object.prototype.
*/

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null

// Object.getPrototypeOf returns the prototype of an object.

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true

/*
Classes

JavaScript’s prototype system can be interpreted as a somewhat informal
take on an object-oriented concept called classes. A class defines the
shape of a type of object—what methods and properties it has. Such an
object is called an instance of the class.

Class Notation

So JavaScript classes are constructor functions with a prototype property.


*/

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

/*
    Overriding derived properties
When you add a property to an object, whether it is present in the prototype or not,
the property is added to the object itself. If there was already a property with the
same name in the prototype, this property will no longer affect the object, as it
is now hidden behind the object’s own property.

*/

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small

/*
Overriding properties that exist in a prototype can be a useful thing to do. 
overriding can be used to express exceptional properties in instances of a
more generic class of objects, while letting the nonexceptional objects take
a standard value from their prototype.
*/

console.log(Array.prototype.toString == Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2

/*
Calling toString on an array gives a result similar to calling .join(",")
on it—it puts commas between the values in the array. 

Maps 
Confusing as it is, in programming the same word is also used for a
related but rather different thing.

A map (noun) is a data structure that associates values (the keys)
with other values. For example, you might want to map names to ages.
It is possible to use objects for this.
*/

let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

/* 
    Using plain objects as maps is dangerous
    If you need a map whose keys cannot easily be coverted
    to strings -- such as objects -- you cannot use an object
    as your map.

    Fortunately, JavaScript comes with a class called Map that is written for this
    exact purpose. It stores a mapping and allows any type of keysbundleRenderer.renderToStream

*/

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

/*
The methods set, get, and has are part of the interface of the Map object.
Writing a data structure that can quickly update and search a large set of values
isn’t easy, but we don’t have to worry about that. Someone else did it for us,
and we can go through this simple interface to use their work.

useful to know that Object.keys returns only an object’s own keys, not
those in the prototype. As an alternative to the in operator, you can use the
hasOwnProperty method, which ignores the object’s prototype.

*/

console.log({ x: 1 }.hasOwnProperty("x"));
// → true
console.log({ x: 1 }.hasOwnProperty("toString"));
// → false

/*
    Polymorphism

    This is a simple instance of a powerful idea. 

    When a piece of code is written to work with objects that have a certain
    interface—in this case, a toString method—any kind of object that happens
    to support this interface can be plugged into the code, and it will just work.

    This technique is called polymorphism. Polymorphic code can work with values
    of different shapes, as long as they support the interface it expects.
*/

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit));
// → a black rabbit

/*
    Symbols

It is possible for multiple interfaces to use the same property name for different things.
When I claimed that property names are strings, that wasn’t entirely accurate.

Thye usually are, but they can also be symbols 

Symbols are values created with the Symbol function. Unlike strings, newly created symbols are unique—you
cannot create the same symbol twice.


*/

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55

/*
Being both unique and usable as property names makes symbols
suitable for defining interfaces that can peacefully live alongside
other properties, no matter what their names are.
*/

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

// It is possible to include symbol properties in object expressions
// and classes by using square brackets around the property name.

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope
