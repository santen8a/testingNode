const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is ${num1+num2}`)
}

function addSum(num1,num2){
    return num1+num2
}

addValues()

module.exports.addSum = addSum
console.log(module)