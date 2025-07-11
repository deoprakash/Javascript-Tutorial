/* 
    2: JavaScript Variables and Data Types
    This file contains basic JavaScript code snippets to demonstrate variable declaration, data types, and type conversion.
*/
// var, let, const

var name = "John"; // String
var marks = 90; // Number
var age;
console.log(name, age, marks);

/* Rules :- 

1. cannot start with numbers.
2. can start with letters, numbers, _ , $
3. Are case sensitive
*/

const ownerName = 'Hari Ram';
// ownerName = 'John'; //Can't change const variable
console.log(ownerName)

var city = 'Delhi';

{
    //local variable
    let city = 'Rampur';
    city = 'Kolkata';
    console.log(city)
}
console.log(city)

/*  Most common programming case types: 

1. camelCase 
2. kebab-case 
3. snake_case
4. PascalCase

*/

document.getElementById