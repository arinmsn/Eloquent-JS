/*	
	Instructions

	The standard JavaScript environment provides another data structure called Set.
	Like an instance of Map, a set holds a collection of values. Unlike Map,
	it does not associate other values with those—it just tracks which values are
	part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

	Write a class called Group (since Set is already taken). Like Set, it has add, delete,
	and has methods. Its constructor creates an empty group, add adds a value to the group
	(but only if it isn’t already a member), delete removes its argument from the group
	(if it was a member), and has returns a Boolean value indicating whether its argument
	is a member of the group.

	Use the === operator, or something equivalent such as indexOf, to determine whether
	two values are the same.

	Give the class a static from method that takes an iterable object as argument
	and creates a group that contains all the values produced by iterating over it.

	Hint
	================================================================================
	The easiest way to do this is to store an array of group members in an instance
	property. The includes or indexOf methods can be used to check whether a
	given value is in the array.

	Your class’s constructor can set the member collection to an empty array.
	When add is called, it must check whether the given value is in the array or add
	it, for example with push, otherwise.

	Deleting an element from an array, in delete, is less straightforward, but you
	can use filter to create a new array without the value. Don’t forget to
	overwrite the property holding the members with the newly filtered version of
	the array.

	The from method can use a for/of loop to get the values out of the iterable
	object and call add to put them into a newly created group.

*/

class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}
