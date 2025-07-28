const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(8));


// const myn1 = myArr.slice(1, 3)
// console.log(myn1)

// const myn2 = myArr.splice(1, 3)
// console.log(myn2)

const city1 = ['Delhi', 'Jaipur', 'Bhopal'];
const city2 = ['Mumbai', 'Surat', 'Indore'];

const city_names = [...city1, ...city2] //spread out method
// console.log(city_names);

const another_array = [1, 2, 3, 4, [5, 6, 7], 7, [4,6, [7,2]]]

const real_another_Arr = another_array.flat(Infinity) //to make single array

// console.log(real_another_Arr);

// console.log(Array.isArray("DEO")); -> false
// console.log(Array.from("DEO")); -> ['D', 'E', 'O']

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

