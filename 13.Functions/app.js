//FUNCTION DECLARATIONS

function greet(firstName = 'John',lastName = 'Doe'){
    // console.log('Hello');
    // if (firstName === 'undefined'){firstName = 'John'}
    // if(lastName === 'undefined'){lastName = 'Doe'}
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve','Smith'));

//FUCNTION EXPRESSIONS

const square = function(x){
    return x*x;
};

console.log(square(9));

//IMMIDEATELY INVOKABLE FUNCTION EXPRESSIONS

(function(){
    console.log('IFFE RAN..');
})();


(function(name){
    console.log('Hello ' + name);
})('Brad');

//PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit : function(id){
        console.log(`Edit todo.. ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo..');
}

todo.add();
todo.edit(9);
todo.delete();