// 1
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//         // 7 print here due to lexical scope this is what closure is
//         // function along with its lexical scope forms closure
//     }
//     y();
// }
// x();
// a function having access to the parent scope, even after the parent function has closed.


// 2
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=70
    return y;
}
var z=x();
// console.log(a)
console.log(z)
var a=11117
z();