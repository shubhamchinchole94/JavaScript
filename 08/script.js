// Arrow Functions

// 1. Syntax
const sayHello = () => {
    console.log('Hey!!');
}
sayHello();

const add = (a,b) => {
    return a + b;
};

console.log(add(2,3))

// this is only for one statement
const addV2 = (c, d) => c + d; // One liner arrow function

console.log(addV2(5,6));


// 2. 'arguments' keyword

// arguments keyword is not present in arrow function it is only use in normal function
// we have to use spread operator here

const addNumbers = (...nums) => {
    console.log(nums);
}


// 3. Hosting

// it is avaiable in normal fuction but not in arrow function


sayHey();
function sayHey() {
    console.log('Hey there!!');
}

// with  Arrow function

//SayHeya();
const SayHeya = () =>{
    console.log('Hey there!!');
}



// 4. This Keyword

// it is avaiable in normal function
// it refere the current object  

// arrow function here refer to  global window in browser 

const obj = {
    value : 20,
    myFunction : function (){
        console.log('Value is ' + this.value);

    }

    
};

obj.myFunction();