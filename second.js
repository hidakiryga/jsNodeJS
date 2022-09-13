//nodejs on its own wraps any module inside this function
// function(exports, require, module, __filename, __dirname) {

    obj = {
        name: "suraj",
        age: 23
    }
console.log(exports, require, module, __filename, __dirname)
    module.exports = obj

// }