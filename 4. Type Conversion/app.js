let val;

//NUmber to string
val = String(5);
val = String(4+4);
//Boolto String
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = String([1,2,3,4])

val = (6).toString();
val = (true).toString();

//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100');
val = parseFloat('23.566');

console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

const val1= String(5);
const val2 = 6;

const sum = val1+val2;

console.log(sum);
console.log(typeof sum);