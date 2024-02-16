//synchronous is the flow of code in sequance each code wait for the previous code to execute
//Asynchronous is the flow of code where a code executes immediately and doesnt block the code.

//In synchronous line waits previous line to be cxecuted completely.
// console.log("first");
// console.log("second ");
// console.log("third");
// console.log("fourth");

//Async allows to run further if a particular line takes time.
// console.log("first");
// console.log("second ");

//Executed after 3 secs but it doesnt block the code and allows next lines to be executed 
// setTimeout(()=>{
//     console.log("Dont wanit and move");
// },3000);  //3s =3000ms

// console.log("third");
// console.log("fourth");



//callbacks 
//A function which is passed as an argument to an another function

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,callBack){
//     callBack(a,b)
// }
// // calculator(2,3,sum);
// //we can pass function directly also
// calculator(2,3,(a,b)=>{
//     console.log(a+b);
// })


// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000);

//Call back hell : problemin js because of nested call backs which becomes hard to manage and understand
//to solve this problem,promises come to play
//Call back hell also called pyramid of doom.
//this type of programminng is defficult to understand and manage
// function getData(data,nextData){
//     setTimeout(()=>{
//         console.log("data",data);
//         if(nextData){
//             nextData();
            
//         }
//     },2000)
// }

// //we are passing value along with call back as an argument
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     });
// });





//promise is an eventual complication of task.It is an object in js.
//promise can be,
//1) pending-promise is yet to be done(result is undefined)
//2) resolve-promise is fulfilled(result is an value)
//3) reject-promise is rejected(result is an error message)
//It is a solution to callback hell
//let promise =new Promise((resolve,reject) =>{})
//resolve and reject are call backs provided by js

// let newPromise =new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("This is async function");
//         // resolve("Sucessful")
//         reject("Some error occured")
//     }, 2000);
// })
// newPromise.then((result)=>{
//     console.log("promise fulfilled,Now you can use it",result);
// })
// newPromise.catch((err)=>{
//     console.log("rejected, cannot use it",err);
// })


//promises chaining- simply, it's a  nested calling for promises
// function promise1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 1");
//             resolve("sucess");
//         },2000)
//     })
// }
// function promise2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data 2");
//             resolve("sucess");
//         },2000)
//     })
// }

// console.log("getting data 1");
// let p1 =promise1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("getting data 2")
//     let p2 =new promise2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// })

//accessing the same thing but in a different way
// console.log("getting data 1");
// promise1()
// .then((res)=>{
//     console.log("getting data 2");
//     promise2()
//     .then((res)=>{
//         console.log(res);
//     })
// })


//final example of promise chaining

// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve("sucess");
//         },2000)
//     })
// }

// console.log("getting data 1");
// getData(1).then((res)=>{
//     // console.log("Getting data 2");
//     return getData(2);
// }).then((res)=>{
//     console.log("getting data 3");
//     return getData(3)
// }).then((res)=>{
//     console.log(res);
// })
//each return statement act as an argument for another then block.


/////Async-await
//We use 'async' word before function  to make it async
//async function always returns a promise.
//where as await pausee the execution of its surrounding async function until the promise is settelred.


// function api(){
// return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000)
//     });
// }

// async function getWeatherData(){
//     await api();
//     await api();
// }
// getWeatherData();


//Another example

// function myFuncData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve("sucess");
//         },2000)
//     })
// }

// async function getDatas(){
//     await myFuncData(1);
//     await myFuncData(2);
//     await myFuncData(3);
//     await myFuncData(4);
// }
// getDatas();


/////IIFE(Immediately invoked function expression) if we use iifee we dont need to call a function to execute.
//And iife function don not have name
// function myFuncData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve("sucess");
//         },2000)
//     })
// }

// (async function(){
//     await myFuncData(1);
//     await myFuncData(2);
//     await myFuncData(3);
//     await myFuncData(4);
// })();
//While making iife ,we should following things
//1)wrap a whole function with ()
//2)there should not be any function name
//at the end (); parenthesis is required. 