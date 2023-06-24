console.log("hi");
setTimeout(()=>{
    console.log("this is inside timeout");
})
console.log("22");

console.log("this is end of the sync code");

const buyIceCream = function (amount = 5){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(amount<3){
                reject("this is rejected")
            }else{
                resolve("this is resolved")
            }
        })
    })
}

buyIceCream(2)
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })