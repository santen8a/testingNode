// const a = 10

// if(a<20){
//     console.log('small')
// }else{
//     console.log('large')
// }

// console.log('hello world')


const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
const addSum = require('./7-mind-grenade')


console.log(`the data captured in names is:${names}`)
console.log(names)
console.log('next sayhi')
console.log(sayHi)

sayHi("sangay")
sayHi(names.john)
sayHi(names.peter)

const total = addSum.addSum(5,2)
console.log(total)