// function statement aka function declaration
function a(){
    console.log("a called")
}
a()
// function expression
 var b = function() {
    console.log("b called")
 }
 b()
// diff is hoisting
 
// function declaration

// anonymous function
var fun = function () {
    
}
//anon fun are used where fun are used as values

//named function expression
var namedFun = function abc() {
    console.log("named function")
    // console.log("abc")

}
namedFun()
//abc()//error cuz created in local

// parameter and argument
function asd(param1,param2){

}
// asd(arg1,arg2)


// first class function, citizens
// ability to use functions as values is fcf pass fun as arg,return fun from another fun
function fcf(para){
    console.log(para)
    return function(){console.log("return")}
}
console.log(fcf(function(){console.log("para")}))

// arrorw fucntion
// intro in es 6