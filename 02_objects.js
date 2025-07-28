// const tinderUser = new Object() //Singleton
const tinderUser = {} //non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            first:"Deo",
            lastname: "Prakash"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.first);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.entries(tinderUser));


const course = {
    coursename : "js tutorial",
    price : "999",
    courseInstructor: "ABC"
}

// course.courseInstructor

const {courseInstructor} = course
// const {courseInstructor: guide} = course

// console.log(courseInstructor);
// console.log(guide);

 