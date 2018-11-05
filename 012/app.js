const numbers = [43,42,2,22,6,13];
const numbers2 = new Array(22,45,32,12,7);
const fruit = ['Apple', 'Pomelo', 'Banana', 'Orange', 'Citrus'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// Insert into Array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(6);

// Mutating Arrays
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,2);
// // Reverse
// numbers.reverse();

// Concatenate Array
val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();
//
// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });
//
// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function under200(num){
  return num < 200;
}

val = numbers.find(under200);

console.log(numbers);
console.log(val);
