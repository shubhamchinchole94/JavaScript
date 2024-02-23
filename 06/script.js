// Loops

// For Loop -> If you know how many times

for(let i = 1; i<=5; i = i+1 ) {

    console.log('Shubham ' + i)
}


// While Loop ->  when you know to cond. but dont know the itreation
// first check the cond. then run code

let ip = 0;
let house = 10;

while(ip != house) {

    ip = ip + 1;
    console.log('Step Taken' + ip)
}


//Do While -> first run the code and the check cond.
let ip1 = 0;
let house1 = 10;
do {

 ip1 = ip1 + 1;
 console.log('Step Taken' + ip1);

}while( ip1 <= house1)



// Guess the number

let num = 50;
let guess = 0;

do {
    guess = parseInt(prompt('Guess the number !!!'))
    if(guess == num) {

        alert('Winner');
        break;
    }
}while(guess !=0)








