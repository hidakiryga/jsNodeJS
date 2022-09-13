const fs = require('node:fs');

// fs.readFile("file.txt","utf8",(err,data)=>{
//     console.log(err,data);
// })

// console.log(fs.readFileSync("file.txt").toString())

// fs.writeFile("file.txt", "this is 2nd line", () => { console.log("written to file") })
console.log(fs.writeFileSync("file.txt","new"))
console.log("executing fsmodule")