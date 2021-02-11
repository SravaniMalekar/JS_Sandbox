const person={
    firstName : 'William',
    lastName : 'Butcher',
    age: 36,
    email : 'william@gmail.com',
    hobbies : ['music','sports'],
    address : {
        city: 'New Jersey',
        state: 'USA'
    },
    getBirthYear : function(){
        return 2021- this.age;
    }
}

let val;

val = person;
//get specific values
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
const people = [
    { names : 'John' , age: 25},
    {names : 'gordon', age: 45}
];

for(let i=0; i < people.length; i++){
    console.log(people[i].names);
}
