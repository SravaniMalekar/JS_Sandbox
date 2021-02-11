let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('May 26 1999');
birthday = new Date('9/10/1981');

val = today;
val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(10);
birthday.setDate(21);
birthday.setFullYear(1999);
birthday.setHours(6);
birthday.setMinutes(30);
birthday.setSeconds(29);

console.log(birthday);
console.log(typeof val);