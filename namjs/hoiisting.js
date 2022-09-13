// hoistimg means before defination executing function 
var x=1
a();
b();
console.log(x)

function a(){
    var x=10
    console.log("this is a func ",x)
}

function b(){
    var x=100
    console.log("this is b func ",x)
}
// these are trated as variable and in memory they are undefined 
// fun1()
// fun2()
var fun1=()=>{console.log("fun1")}
var fun2=function(){console.log("fun2")}
fun1()
fun2()