let test = function(var1){
    console.log("var 1 is "+var1);
}

test("hehe")

// test = "two"

console.log(test);

test("hi")

var a =1

let fu = (a<2) ? ()=>console.log("a is less than 2") : ()=>console.log("a is greater")

fu()

let car = {
    name:"tenzins",
    model:"sonata",
    year:2011,
    speak:function(){
        console.log("HI my model is :",this.model);
        let innerSpeak = function(){
            console.log("I am inside and i want to speak: ",this.model);
        }
        innerSpeak()
    },

    honk:function(){
        console.log("HI my model is :",this.model);
        let innerHonk = () =>{
            console.log("I am inside and i want to honk: ",this.model);
        }
        innerHonk()
    }
}

console.log(car)
console.log(car.model);
car.speak()
car.honk()
