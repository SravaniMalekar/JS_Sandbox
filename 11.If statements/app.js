const id = 100;

if(id == 100){
    console.log('CORRECT');
} else{
    console.log('INCORRECT');
}

if(id != 100){
    console.log('CORRECT');
} else{
    console.log('INCORRECT');
}

// equal to value and type
if(id === 100){
    console.log('CORRECT');
} else{
    console.log('INCORRECT');
}

if(id !== 100){
    console.log('CORRECT');
} else{
    console.log('INCORRECT');
}

if(typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
}else{
    console.log('No ID');
}

if(id <= 100){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}


const color = 'blue';

if(color === 'red'){
    console.log('Color is red');
}else if(color === 'blue'){
    console.log('Color is blue');
}else{
    console.log('Color is neither red nor blue');
}

//Logical operators

const name = 'Steve';
const age = 9;

if (age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >=13 && age <= 19){
    console.log(`{name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}

if(age < 16 || age > 65){
    console.log(`${name} can not run in the race`);
}else {
    console.log(`${name} is registered for the race`);
}

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');
