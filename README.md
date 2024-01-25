# JavaScript-Set-Reference

JavaScript Set is a collection of items that are unique i.e. no element can be repeated. Elements of the set can be iterated in the insertion order. A set can store any type of value whether primitive or objects.

Syntax:

Set.function()

const mySet = new Set(); 

mySet.add("California"); 
mySet.add("India"); 
mySet.add("California"); 
mySet.add(10); 
mySet.add(10); 

const myObject = { a: 1, a: 5 }; 

mySet.add(myObject); 

console.log(mySet); 

**Output:**

Set(4) { 'California', 'India', 10, { a: 5 } }
