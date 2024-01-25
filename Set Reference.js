const mySet = new Set();

mySet.add("California");
mySet.add("India");
mySet.add("California");
mySet.add(10);
mySet.add(10);

const myObject = { a: 1, a: 5 };

mySet.add(myObject);

console.log(mySet); 
