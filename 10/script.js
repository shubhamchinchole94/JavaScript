// Arrays


const students = ['Shubham', 'Johan' ,'Jane','Bill'];

// you can change element at index
students[0] = 'Shubham Chinchole';


// to add element in array use push()

students.push('Alexa')
students.push('Siri');
console.log(students);

//  In Javascript we can have hetrogeinus array as other language usually hav Homogenius
// we can put emojis also in array in javascript

const myArray =[1, true, 'Shubham', '🚀']

// we can also add object in array
myArray.push({name:'Tom'})

console.log(myArray)
// to find index of element use indexof()


console.log(myArray.indexOf('Shubham'))

// if it not found index then it will return -1
console.log(myArray.indexOf('Shubha'))


const myArr =[1, true, 'Ronny', '🚀']

console.log(myArr)

// pop() will remove element from rare end
myArr.pop()
console.log(myArr)

