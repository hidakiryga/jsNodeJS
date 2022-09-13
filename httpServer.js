const fs = require("fs");
const http = require("http")

const port=process.env.PORT || 5000;


const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader("Content-Type","text/html")
    if(req.url=='/'){
        const data = fs.readFileSync("index.html")
        res.end(data)

    }else if(req.url=='/about'){
    res.end("<h1>ABOUT US</h1>")
        
    }else if(req.url=='/contact'){
    res.end("<h1>CONTACT US</h1>")
        
    }else{
        res.end("<h1>invalid url</h1>")

    }
})

server.listen(port,()=>{
    console.log(`server is running at port: ${port}`)
})