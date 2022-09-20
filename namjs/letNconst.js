//let and const are hoisted decleration but they behave differenly than var
// console.log(a)
//temporal dead zone time bw 2 and 5 line uninitialized
console.log(b)
let a=1;
console.log(a)
var b=10;

// console.log(c)
const c=100;
console.log(c)

// restriction const>>let>>var

// reference erroe is when js is not able to find any variable in memory space

// syntax error when syntax of js is violated

// type error then typr of js is violated

//let and const are bloked scope {block} block or compound statement means combining multiple lies of code into a group 
// use of it is when js expect 1but we give {block}
// let and const are not shadowed
var d=22;
let e=33;
const f=44 ;
{
    var d=2;
    let e=3;
    const f=4;

    // {
    console.log(d)
    console.log(e)
    console.log(f)
    // }
}

console.log(d)
console.log(e)
console.log(f)
// block scope let and const is visible to that scope only

// shadow means previously initilised and changes value in block and it will modify same

// arrouw functions are same as function