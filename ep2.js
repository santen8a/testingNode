const car = {
    model:'seltos',
    brand:'kia',
    drive: function(){
        console.log(this)
    }
}

car.drive();

const kar = car.drive

// kar();

console.log(this)