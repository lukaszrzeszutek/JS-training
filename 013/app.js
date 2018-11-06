const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 18,
  email: 'test@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 1994 - this.age;
  }

}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Rayan', age: 30},
  {name: 'Michael', age: 30},
  {name: 'Szymon', age: 30}
]

for(let i=0; i<people.length; i++){
  console.log(people[i].name);
}
