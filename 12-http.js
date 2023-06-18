const http = require('http')

const server = http.createServer((req, res)=>{

    if(req.url==='/close'){
        console.log("shutting down server")
        process.exit()
    }

    if(req.url==='/'){
        res.write("hoem na hoe chi")
    }

    if(req.url==='/about'){
        res.write("you are in aobut page")
    }
    console.log(req)

    res.end('hello default')
})

server.listen(5000)