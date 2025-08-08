// function hello(){
    // console.log("hello world!");
// }

// hello()

// function addTwoNum(num1, num2){
//     console.log(num1+num2);    
// }


// addTwoNum(4, 8) //12
// addTwoNum(4, "a") //4a

function loginUserMessage(username = 'Sam'){
    if(!username){ //Alternate -> if(username===undefined)
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("DEO"))
// console.log(loginUserMessage()) //not passed any parameter -> output : undefined

