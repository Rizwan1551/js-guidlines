// primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

// console.log(id === anotherId);


const bigNumber = 5464738392n

// reference (non primitive)

//array, objects, functions

const heros = ["hero1", "hero2", "hero3"]
const myId = {
    name: "Rizwan",
    age: 33,

}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof outsideTemp);

