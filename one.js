// if

// if (true) {
//     // code will execute
// }

// if (false) {
//         // code will not execute.. litral false
// }


// const isUserloggedin = true

// const temp = 41
// if (temp === 41) {
//     console.log("less than 50");
// } else{
//     console.log("temp is greater than 50");
// }
// console.log("executed");
//  // <, > <=, >=, ==, !=, ===, !== 

//  const score = 200
//  if (score > 100) {
//     const  power = "fly"
//                                                 // Block Scope
//     console.log(`user power: ${power}`);
//  }
//  console.log(`user power: ${power}`);
  
// const balance = 1000
// if (balance > 500) console.log("test"),  console.log("test2"); not a good way to warite a implecit scope
//  if (balance < 500) {
//     console.log("less than 500");
//  } else if (balance < 750){
//     console.log("less than 750");
//  }else if (balance < 800){
//     console.log("less than 900");
//  }
//  else{
//     console.log("less than 1200");
//  }


// const Userloggedin = true
// const debitCard = true
// const loggedinFromGoogle = false
// const loggedinFromEmail = true
// if (Userloggedin && debitCard && 2 ==5) {
//     console.log("All to Buy courses");
// }
// if (loggedinFromGoogle || loggedinFromEmail) {
//     console.log("User logged in");
// }


// Nullish Coalescing Operator (??): null, undefined
let val1 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");