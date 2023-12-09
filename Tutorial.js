//  without defining parameter we can access
//  argument objets in js
//  function add(){
//     console.log(arguments);

//     if(arguments.length==0)
//     {
//         console.log("No Arguments");
//     }
//     else{
//         let sum=0;
//         for(let i=0;i< arguments.length;i++)
//         {
//             sum+=arguments[i];
//         }
//         console.log(sum);
//     }

//  } 
 
//  add(8,20,7,4);






//third party error  is prevented by using anonymous function turning into local varaible
// let hello='hello main program'
// function greet(){
//     console.log(hello);
// }
// greet();
 



//part 30 math random object

// let x=Math.floor(Math.random() *10);//0 to 9 random numbers...if we need numbers from o to 10 multiply with 11
// console.log(x);

// let y=Math.floor((Math.random() *10) % 7);//random numbers from 0 to 6 
// console.log(y);

// let z=Math.floor(Math.random() *100);//0 to 99 random numbers...if we need numbers from o to 100 multiply with 101
// console.log(z);

// //1 to 10
// let r=Math.floor(Math.random() *10)+1;
// console.log(r);

//random numbers between 15 and 25   here 15 is include but 25
// let n=Math.floor(Math.random()*(25-15))+15;
// console.log(n);

//here if you ned both numbers to be inlcuded then min+1
// function getrandom(min,max){
//     let x=Math.floor(Math.random() *( max - min + 1) ) + min;
//     return x;
// }
// console.log(getrandom(10,20));





//predfined date object part 31
//current date time
// let x = new Date();
// console.log(x);
//mnimum two parameters are required when u need specific year date ....year and month
// let y=new Date(2018,11,13,10,33,56);
// console.log(y);
//string  format and mthods
// let z=new Date('october 13, 2018 11:12:13');
// console.log(z.getTime());
// console.log(z.getFullYear());

// console.log(z.getMonth());

// console.log(z.getDate());

// console.log(z.getHours());

// console.log(z.getMinutes());

// console.log(z.getSeconds());

// console.log(z.getDay());

// console.log(z);

//set is used to change get is used to obtain
// let a=new Date('june 08, 2003 11:12:13'  );
// a.setFullYear(2023);

// console.log(a);

//when you want to find date after 50 days ofcurent date
// let x=new Date('june 08, 2003 11:12:13');
// let y= new Date('june 08, 2003 11:12:13');
// y.setDate(x.getDate() + 50);
// console.log(x);
// console.log(y);
// //compare date
// if(x<y){
//     console.log("x is past date")

// }
// else{
//     console.log("y is past date")
// }




//new keyword part 32
// var person =new Object();
// person.name='Rahil';
// person.age=20;
// console.log(person)

//part 33 getters and setters
// let person={
//     name:'rahil',
//     age:20,
//     city:'mangalore',
//     // getname:function(){
//     //     return this.name.toUpperCase();
//    // } 
//    //here is uses get to manipulate data
//    get getname(){
//     return this.city.toUpperCase();
//    }
// }
// console.log(person.getname);

//set property
// let hello={
//     name:'Yusuf',
//     age:20,
//     city:'mangalore',
//     set setname(n)
//     {
//         this.name=n.toUpperCase();
//     }
// };
// hello.setname='Abubakkar';
// console.log(hello)