const id = 100;

// // EQUAL TO
// if(id == 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
//
// // Not equal to
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
//
// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }
//
// // EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// if(id){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No id');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No id');
// }

// GREATER OR LESS THAN
// if(id >= 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE
const color = 'yellow';
//
// if(color === 'red'){
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red and blue');
// }

// LOGICAL OPERATORS
const name = 'Steve';
const age = 4;

// AND &&
if(age > 0 && age <= 12){
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else{
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without BRACES
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');
