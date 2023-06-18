const {readFile, writeFile, write} = require('fs')

readFile('./content/first.txt','utf8',(err,results)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = results
    readFile('./content/second.txt','utf8',(err,results)=>{
        if(err){
            console.log(err)
            return
        }
        const second = results
        writeFile('./content/result-async.txt','writing a sync methode',(err,results)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(results)
        })
    })
}) 