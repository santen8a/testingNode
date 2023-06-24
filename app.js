// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]

// const newItems = _.flattenDeep(items)
// console.log(newItems);

// console.log("hi")

const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve,reject)=>{
        readFile('./content/first.txt','utf8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt').then(result=>console.log(result)).catch((err)=>console.log(err))