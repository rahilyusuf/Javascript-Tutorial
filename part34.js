// //object construct function
// function Student(first,last,age,cls){
//     this.first=first;
//     this.last=last;
//     this.age=age;
//     this.cls=cls;
// }

// let s1=new Student('Rahil','Yusuf','20','2nd year');
// let s2=new Student('Vikram','naik','20','2nd');
// s1.age=25;
// s2.nationality='indian';
// s1.name=function(){
//     return this.first+' '+this.last;
// }
// console.log(s1.name());
// console.log(s2);


//35 prototpye: is a concept where we can add method or property outside contructor
//prototype:this is main object (senior level)created by js .thi is higher level class were other class or object inherrit
//from this 
// function Student(first,last,age){
//     this.first=first;
//     this.last=last;
//     this.age=age;
// }
// Student.prototype.nationality="Indian";
// Student.prototype.name=function(){
//     return this.first+' '+this.last;
// }

// let s1=new Student('Rahil','Yusuf','20');
// console.log(s1); 
// console.log(s1.name());


//36 Nested object used in jason and when u create apis
// var user={
//     id:'4JK21IS042',
//     department:'ISE',
//     personalInfor:{
//         name:'Rahil',
//         age:'25',
//         nationality:'Indian',
//         address:{
//             city:'Bangalore',
//             state:'Karnataka',
//             country:'India'

//         }
//     }
// }
// console.log(user);
// console.log(user.personalInfor);
// console.log(user.personalInfor.address);



//part 37 Hoisting
// var x;//declaration
// x=5;//assign
// console.log(x);//call ......this is the normla procedure

// var x;//here when we declare x ..js automatically store x=undefined 
// console.log(x);//call
// x=7;//assign

//this is hoisting 
// x=7;
// console.log(x);
// var x;

//but it only hoist declaration part not assigmnet part (var x; console.log(x);x=7)...
//  console.log(x);
//  var x;
//  x=7;


 //note : let and const  in thme hoisting happens but it doesnt initailize x=undefine..there this returns error
//  console.log(x);
//  let x;
//  x=7;

// //"use strict"
// x=4;
// console.log(x); //now here it automatically decalres but when u use strict mode without declration it returns error

// let elm=document.getElementById("first");
// console.log('elm')