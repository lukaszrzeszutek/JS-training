// // var, let, const
//
// var name = 'John Cena';
// console.log(name);
//
// // var można nadpisać
// name = 'Rey Mysterio';
// console.log(name);
//
// var greeting;
// console.log(greeting);    //komunikat niezdefiniowane
//
// greeting = 'Hello';   //przypisujemy wartość do greeting
// console.log(greeting);

// // Let
// let name;
// name = 'John Cena';
// console.log(name);
// name = 'Rey Mysterio';
// console.log(name);

// CONST

// const name = 'Sandra';
// console.log(name);
// Nie można ponownie przypisać
// name = 'Karol';
// Trzeba przypisać wartość
// const greeting;

const person = {
  name: 'John',
  age: 30
}
// Można podmienić właściwość wewnątrz obiektu
person.name = 'Augustyn';

// console.log(person);

const numbers = [1,2,3,4,5];
// Mozna dodać liczby do tablicy
numbers.push(6);
 console.log(numbers);
