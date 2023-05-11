// define and name the function
//add any parameters (conditions) to work with
// define the action of the function

// function sayHello () {
//     console.log('hello world')
// }

//we put a parameter in the parethesis
// function sayHelloName(name) {
    //we call the parameter in the action
//     console.log(`hello ${name}`)
// }
//we pass an argument when we call the fuction

// sayHelloName(`Jeremy`)
// sayHelloName('Brittany')
// sayHelloName(`Tiffany`)
// sayHelloName(`Jordan`)

//function sayFullName (firstname, lastname, age) {
    //console.log(`hello ${firstname} ${lastname} you are ${age} years old`)
//}

//sayFullName(`Theresa`, `Kennelly`, 24)

//ARROW FUNCTIONS -> ES6

const sayHi = (name, day) => console.log(`hi ${name} have a great ${day}`)

//sayHi(`Theresa`, `Thursday`)

const findSum = (num1, num2) => console.log(num1 - num2)

// findSum(10, 12)

const calculateArea = (num1, num2) => console.log(num1 * num2)

// calculateArea(10,5)
// calculateArea(25, 5)

// scope can be passed down from parent to child 
// global to local
// cannot go from child to parent or local to global
// also cannot go horizontally from sibling to sibling

const personsName = 'brittany'
const colorOfShirt = 'blue'

{
    const personsName = 'Jordan'
    const favoriteVeggie = 'broccoli'
    console.log(personsName)
    console.log(colorOfShirt)
    console.log(favoriteVeggie)
}

{
    const personsName = 'Theresa'
    console.log(personsName)
    console.log(colorOfShirt)
}

console.log(personsName)
console.log(colorOfShirt)
