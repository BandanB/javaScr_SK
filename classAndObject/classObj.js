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
//prototype is also and objext which inbuilt methods and properties.object inherits methods and properties from prototype.
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
class samsung{
    camera(){
        console.log('three camera');
    }

    weight(){
        console.log('approx 200gm');
    }

    zoomCapacity(){
        console.log('8x');
    }
    versionName(version){
        this.versionN =version;
    }
}

let samsungS22 = new samsung();
samsungS22.versionName('S22')
let samsungS23 =new samsung();
samsungS23.versionName('S22')
console.log(samsungS22);

//We have done console just to know we can access properties and method from class
console.log(samsungS22.zoomCapacity());