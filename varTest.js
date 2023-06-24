var test = "a"
let testB = "b"

if(true){
    var test = "C"
    let testB = "inner1"
    if(true){
        var test = "hehe"
        let testB = "inner2"
    }
    console.log(test)
    console.log(`the inner if value is ${testB}`)
}


console.log(test)

console.log(`the outer if value is ${testB}`)