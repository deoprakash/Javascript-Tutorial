/* 
 1. introduction to JavaScript
This file contains basic JavaScript code snippets to demonstrate console methods.
*/

console.time('mycode took: ')
console.log("Hello, World!");
console.log(3*5);
console.log([34, 2, 1, 4]);
console.table({name:"john", age: 30});
console.warn("This is a warning message!");
console.error("This is an error message!");
console.info("This is an info message!");
console.assert(5 > 10, "Assertion failed: 5 is not greater than 10");
console.timeEnd('mycode took: ');