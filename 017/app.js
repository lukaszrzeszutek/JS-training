// FUNCTION DECLARATION

// function greet(){
//   console.log('Hello');
// }
//
// greet();


function greet($firstName = 'Sandro', $lastName = 'Escobar'){
  // if(typeof $firstName === 'undefined'){$firstName = 'John'};
  // if(typeof $lastName === 'undefined'){$lastName = 'Cena'};

  return 'Hello ' + $firstName + ' ' + $lastName;
}

// console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

// console.log(square());

// // IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function(){
//   console.log('Hej');
// })();
//
// (function($name){
//   console.log('Hej ' + $name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Testowanie');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add();
todo.edit(23);
todo.delete();
