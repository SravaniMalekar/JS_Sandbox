//Create some arrays
const number = [12,3,4,67,88,65];
const numbers2 = new Array(23,45,67,3,67,8);
const fruits= ['apple','strawberry','banana','orange'];
const mixed = [23, 'blueberry', true, undefined, null, {a:1,b:2}, new Date()];

let val;

//length
val = number.length;
//check if is array
val = Array.isArray(number);
//get single value
val = number[3];
//insert into array
number[2]= 100;
//find index value
val = number.indexOf(3);

//MUTATING ARRAY
//Add on to end
number.push(5);
//add on to front
number.unshift(120);
//take off from end
number.pop();
//take off from front
number.shift();
//splice values
number.splice(1,3);
//reverse
number.reverse();

//concatenante 
val = number.concat(numbers2);

//sorting
val =  fruits.sort();
val = numbers2.sort();//sorts acc to first digit

//use compare function
val = numbers2.sort(function(x,y){
    return x-y;
})

val = numbers2.sort(function(x,y){
    return y-x;
})

//find
function under50(num){
    return num < 50;
}

val = numbers2.find(under50);

console.log(number);
console.log(val)