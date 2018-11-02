const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Luca';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[6];

// indexOf()
val = firstName.indexOf('i');
val = firstName.lastIndexOf('i');

// charAt()
val = firstName.charAt('6');
// get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 3);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-4);

// split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Luca', 'Jack');

//includes()
val = str.includes('Hello');

console.log(val);
