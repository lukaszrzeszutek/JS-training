let val;

const today = new Date();
let birthday = new Date('8-22-1994 11:34:45');
birthday = new Date('September 22 1994');
birthday = new Date('9/10/1982');


val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(1);
birthday.setDate(15);
birthday.setFullYear(1899);
birthday.setHours(12);
birthday.setMinutes(13);
birthday.setSeconds(45);

console.log(birthday);
