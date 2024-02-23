const age = 28;

if (age >= 18) {
    console.log('Yes, you can vote')
}else {
    console.log('No, you cant vote')
}


// Ternary Operator

const age1 = 20;

age1 >= 18 ? console.log('Yes') : console.log('No')



// Switch statement

// you can remove { }

const option = 22;

switch(option) {

    case 1: 
        console.log('Namaste!');
        break;
    case 2: 
        console.log('Hello!');
        break;
    case 3: 
        console.log('Bonjor!')
        break;
     default: 
        console.log('Invalid Option!')

    
}



let a = 30;
let b = 40;
let opt = '+';


switch(opt) {

    case '+' :console.log(a + b);
    break;
    case '-' :console.log(b - a);
    break;
    case '*' :console.log(a * b);
    break;
    case '/' :console.log(a / b);
    break;
    default :console.log('Invalid oprator!');
    
    
    
}