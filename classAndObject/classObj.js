//object is and entity which has state and behaviour(state means property and behaviour means function)
/* const student ={
    fullName:'Bandan Basnet',
    marks:80,
    printMarks:function(){
        console.log("My mark =",this.marks);
    }
}
*/


//js objects has the special property called prototype.Prorotype is an reference to an object.
//prototype is also and object with inbuilt methods and properties.object inherits methods and properties from prototype.
//we can also create our own custom prototype inside an object using  __proto__

/* const employee ={
    calcTax(){
        console.log("tax rate is 10%");
}}

const newEmploee={
    salary:50000,
}
const newEmploee2={
    salary:50000,
}

newEmploee.__proto__=employee;
newEmploee2.__proto__=employee; */
//basically we are setting one object to other object as prototype.

//class is a blue print for any related objects
//ex, samsungs22 and samsung s23 has same functionality patterns
//and clas can even assign their different element like version name within it
// class samsung{
//     camera(){
//         console.log('three camera');
//     }

//     weight(){
//         console.log('approx 200gm');
//     }

//     zoomCapacity(){
//         console.log('8x');
//     }
//     versionName(version){
//         this.versionN =version;
//     }
// }

// let samsungS22 = new samsung();
// samsungS22.versionName('S22')
// let samsungS23 =new samsung();
// samsungS23.versionName('S22')
// console.log(samsungS22);

//We have done console just to know we can access properties and method from class
// console.log(samsungS22.zoomCapacity());

//Constructor is a special method called when the instance of a class ie object is created.
// class Toyota{
//     constructor(brand,price){
//         console.log("New object of this class is crated");
//         console.log(this.brandName=brand); 
//         console.log(this.priceApprox=price); 
//     }
// }

// let newCar =new Toyota("bestCar",100000);//we can even pass the values to the constructor 
// let newCar2 =new Toyota("superBestCar",200000);//we can even pass the values to the constructor 
// console.log(newCar);

//inheritance is passing down properties of parent class to child class.

// class Animal{
//     legs(){
//         console.log("normally four legs");
//     }
//     drink(){
//         console.log("Consumes water")
//     }
    
// }

// class Dog extends Animal{
//     bark(){
//         console.log("dog barks");
// }}
// //here dog's  object can access both features of child class and parent class
// let dogBabyObj =new Dog();
// console.log(dogBabyObj.bark(),dogBabyObj.legs());


//super keywoard is used to call the constructor of its parent class and access parents methods and properties.
//child constructor need to use super keyword to have access of parent constructor
// class Person{
//     constructor(Heis){
//         console.log("All person has two legs");
//         console.log("He is a", this.heis = Heis);
//     }
//     eat(){
//         console.log("he eats");
//     }
// }

// class Teacher extends Person{
//     constructor(name, Heis){

//         // involed and passed the value to its parent
//         super(Heis);

//         //accessed a function from parent
//         super.eat();
//         console.log(this.name=name)
//         console.log("teacher teaches students");
//     }
// }
// let  newTeacher = new Teacher("bandan","believer");


//error handing
//try-catch blocks(not a paet of object oriented)
//try catch allows a code to run even after detecting some errors, it is simply handling errorss
let a=2;
let b=4;
console.log(`sum is ${a+b}`);
try{
    console.log(`sum is ${a+bbbb}`);
}
catch(err){
    console.log(err);
}
console.log(`sum is ${a+b}`);
console.log(`sum is ${a+b}`);
console.log(`sum is ${a+b}`);