//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros ); */

// https://262.ecma-international.org/5.1/#sec-11.4.3


let mySelf = "myfamily"
let myIntroduction= mySelf
  
myIntroduction = "vivek"
console.log(myIntroduction);
console.log(mySelf);

let user1 ={
    myidNum: 123456,

    myemail:"viveknasit167@gmail.com"
}
let user2=user1
let user3=user2
user1.myemail="virvjrvnea@gmail.com" 
user1.myidNum=4562351
console.log(user1.myemail);
console.log(user2.myemail);
console.log(user3.myidNum);

