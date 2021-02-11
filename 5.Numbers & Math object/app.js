const num1 =200;
const num2 =50;
let val;

//Simple math

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//math objects

val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-43);
val = Math.pow(6,2);
val = Math.min(2,6,8,35,7,5,-2);
val = Math.max(2,6,8,35,7,5,-2);
val = Math.random();

//for random number between 0-20

val = Math.floor(Math.random()*20 + 1);

console.log(val);