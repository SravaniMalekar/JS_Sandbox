const firstName  = 'Steven';
const lastName = 'Smith';
const age = 21;
const str = 'hello my name is kavl';
const tags = 'web development, web design, web dev';

//Concatenation
val = firstName + lastName;
val = firstName + ' ' + lastName;

//append
val = 'Michael ';
val += 'Scott';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//escaping
val = 'That\'s awesome, I can\'t wait';

//length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3];


//indexof()

val = firstName.indexOf('e');
val = firstName.lastIndexOf('e');

//charAt()
val = firstName.charAt('3');
//get last char
val = firstName.charAt(firstName.length -1);

//substring()
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',')

//replace()
val = str.replace('kavl', 'jack');

//includes()
val = str.includes('hello');

console.log(val);