// Functions


function sayHello() {
    console.log('Hey Shubham');
}

sayHello() // calling of function



// Parameters 
              //arguments -> a ,b
function add (a, b) {
    console.log(a + b);
}

add(5, 10) // parameters




function multiply(num1, num2){

   return num1 * num2;

}

let c = multiply(5,2)

console.log('Hey user result is',c)



// Unlimited Arguments accept
function addNumbers() {
let ans = 0;

for (let i = 0; i <arguments.length; i++){


    ans = ans + arguments[i];

   }
   return ans;
}



let result = addNumbers(10, 22, 33, 44,55,88);
console.log(result);



// spread opreator


function addNumbersV2(...numbers) {
    let ans = 0;
    
    for (let i = 0; i <numbers.length; i++){
    
    
        ans = ans + numbers[i];
    
       }
       return ans;
    }

    let result1 = addNumbersV2(10, 22, 33, 44,55,88,100);
    console.log(result1);
    
