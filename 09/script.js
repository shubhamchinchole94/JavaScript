// High Order in Functions and Callback

// A function that takes a function as an argument


function add (a, b, cb) {
    let result = a + b;
    cb(result);
 

}

// this using normal function 
add (5, 6, function (val){
    console.log(val);
})



// this using arrow function

add(2, 4, (val) => console.log(val));
