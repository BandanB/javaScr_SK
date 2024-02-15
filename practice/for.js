// for(let i=1;i<=5;i++){
//     console.log(i);
// }

//for of
//In for of loop we dont need to do initialization,condition and updation like for loop
//here all of the vales of string wil be stored in variable val
// let str ="Bandan Basnet"
// let myArray= ['suman','Bandan',"Dipesh"]
// for(let val of myArray){
//     console.log(val);
// }

//for in
// let myObject = {
//     name:'Suman',
//     descript:'Kaha se aaya tha woh!!!'
// }
// for(let val in myObject){
//     console.log(val, ':',myObject[val]);
// }

// let endValue =100;
// for(let i=1;i<=endValue;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//string
//Ask user name and genarerate the new oupput including your own strings

// let user =prompt('Enter your name')
// console.log(`@${user}${user.length}`);

//Array
//find average marks of the class
// let sum =0;
// let avg;
// let arr =[60,97,33,56,88,78]
// for(let mark of arr){
//     sum +=mark
// }
// avg =sum/arr.length
// console.log("sum is",sum);
// console.log('average is',avg) ;f


//return array with 10% offer
// let price =[50,100,50,100,50,100]
// for(i=0;i<price.length;i++){
//     console.log("origional price is:",price[i]);
//     offer=price[i]/10
//     price[i] =price[i]-offer
//     console.log("Price after discount:",price[i]);
// }
// console.log("Array of after discount",price);

// functions
// let i;
// function checkVowels(str){
//     for(i=1;i<=str.length;i++){
//         if(str[i]=='a'||str[i]=='e'|| str[i]=='i' ||str[i]=='o' ||str[i]=='u'){
//                 console.log(str[i]);
//         }
//     }
// }
// checkVowels("Bandan aeiou");
//Higher order function are thoes functions which either takes other fiunctions as parameter or returns function.(Ex:forEach)

//In for each we can pass three paras(vaue,indx,array)
//Square of any array element
// let arr=[1,2,3,4,5]
// arr.forEach((val)=>{
//     console.log(val**2);
// })

//Map is a method like foreach but it is used to returns new array as a reesult
// let arr =[1,2,3,4,4]
// const newArr =arr.map((val)=>{
//         return val;
// })
// console.log(newArr);

// let arr =[1,2,3,4,4]
// const newArr =arr.map((val)=>{
//     if(val%2===0){
//         return val;
//     }
// })
// console.log(newArr);

//Filter method same like map but returns only those values which are said to be done in condition
//map returns undefined if the  cons]dition doesnt match , but filter returns only those which are filtered out from condition 
// let arr =[1,2,3,4,4]
// const newArr =arr.filter((val)=>{
//         return val%2===0;
// })
// console.log(newArr);

//reduce
// let arr =[1,2,3,4,4]
// const newArr =arr.reduce((accumulator,currentval)=>{
//         // return accumulator+currentval ;
//         return accumulator>currentval ? accumulator:currentval;
// })
// console.log(newArr);

let numberN =prompt('Enter a number then, all the number before that will b generated')
let arr=[];
for(let i=1;i<=numberN;i++){
    arr[i-1]=i;
}
console.log(arr);