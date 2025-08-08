// singleton

// object literals

const mySym = Symbol("key1")

const JsUser =  {
    name : "Deo",
    age : 20,
    location : "Raipur",
    [mySym] : "myKey1",
    email : "xyz@gmail.com",
    isloggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser.email);
// console.log(JsUser.isloggedIn);
// console.log(typeof JsUser[mySym]);

JsUser.email = "abc@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "js@outlook.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
