// Logical Operators


// AND -> (&&)  All cond. must true

const age = 17;
const gender ='male';

if(age >= 18 && gender == 'male') {
    console.log('You are adult male')
}


// OR -> (||)  Atleast one cond. must be true  
if(age >= 18 || gender == 'male') {
    console.log('You are adult male')
}

// NOT -> (!) True -> False &  False -> True

const number = 5;

if(number % 2 != 0){
    console.log('Odd number');
}