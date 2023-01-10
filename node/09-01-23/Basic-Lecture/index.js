// 1. event driven - onClick , onChange, onLoad ....
// 2 synch , & Asynch
// 3.  js is synchronous single threaded language .

//  asynch

// 4.callback
// 1. function passed to another as argument is called call back funcgtion .
// 2.it helps us to create Asynch function .
// 3.=>

// function sum(a,b,print){
//   print(a+b)
// }
//  function print(str){
//   console.log("the result is" + str)
//  }

// sum(8,7,print)

// function sum(a, b, cb) {
//   cb(a + b);
// }
// sum(5, 2,console.log(cb));

// HOF: the function which accepts another function as arguments is called HOF
//  In our above case sum is HOF

// const arr = [1, 2, 3];
// arr.forEach((el) => console.log(el + 2));
//  forEach = HOF
// (el)=>console.log(el+2) = Call back function.

// ****import sum function ***
// 5
// const sum = require('./test');
// sum(2,8);

// 6 ** importing multiple function **

// const random = require('./test');
// random(8, 5);

// 7 ** importing subtraction func **
// const sub = require("./test")
// sub(25,10)

// 8 ** importing devide func **

// const random = require('./test');
// random(8, 2);

//9  importing multiple function at time by object destructuring ..........

const { sum, multiple, devide, subtraction } = require('./test');
// sum(2, 8);
// multiple(2, 8);
// devide(8, 2);
// subtraction(8, 5);

//10.   3 way to import files in node

// 1. local files like module.exports and require("./filepath")
// 2.node API : node it self provide api to do sum function exampkle

const os = require('os');
// console.log(os.version());
// console.log(os.cpus());

// node API fs - reead files system

// ** asynch **
// const fs = require("fs")
// const result  = fs.readFileSync("./test.txt",{encoding:"utf-8"})
// console.log('result:', result)

// ** Synch** recomanded
const fs = require('fs');
fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log('yes this is last line');

// Note:- readFile is Asynch function which takes
// ("path of file" , endocing , callback function(1st err, 2nd data))
// encoding is must becz it converts to str

// 3. external library - npm packages
