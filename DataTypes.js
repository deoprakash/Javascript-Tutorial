/* 
   3:  Data Types in JS

   - Primitive DT
   - Secondary DT
*/

let name = "John"
console.log("datatype is "+ (typeof name));

let mark = 34;
console.log("datatype is "+ (typeof marks));

let isDriver = true;
console.log("datatype is "+ (typeof isDriver));

let nullVar = null;
console.log("datatype is " + typeof(nullVar));

let unndef = undefined;
console.log("datatype is " + typeof(undefined));

myarr = [ 1, 2, 3, 4, 5, 6, false, "John"]
console.log("datatype is " + typeof(myarr));

let Stmarks = {
    john: 89,
    shubham: 57,
    ankit: 90
}

console.log(Stmarks)

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 6326474627482337n

// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap(Non Primitive)

let animal = "Dog"

let myPet = animal
myPet = "bruno"

console.log(animal);
console.log(myPet);

// in Stack values get overridden - copy is given

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "abc@google.com"

console.log(user1.email);
console.log(user2.email);

// in heap any variable upon overridden will change other variable also
// original value is given