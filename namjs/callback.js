// what is a callback function in js 
// since functions are first class fucnitons
// passing a fucntion as an argument to another function is callback

setTimeout(function(){console.log("timer")},5000)
function x(y){
    console.log("x")
}

x(function y(){console.log("y ")})

// giving resposibility to execute y to x function

// js is synchronous single threaded language but callbacks makes it asynchronous

// js have single callstack so if some heavy fucntion is called with takes 5-6 min then other function wont run
// this will block main thread so we should only perform small thisngs

function globAttachEventListener(){

let ct=0
document.getElementById("mybut")
.addEventListener('click',function callbackFun(){
    console.log("clicked:",++ct)
});

}

// events are heavy task