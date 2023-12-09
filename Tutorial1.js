// anonymous function
// setTimeout(function (){
//     console.log('hello World Welcome');
// },30000);

//Immediately invoked function
//here we used same varaible but varaible we used is converte into local varible  by using anonymous immediatly invoked

// (function(){
//     let hello="hello third party"
//     console.log(hello);
// })();

//object  creation and properties
// let person ={
//     name:'Rahil',
//     age:'20',
//     city:'Mangalore',
//     'last name':'Abubakkar', //use quotes if we need space i.e lastname=>'last name'

    //when the object is defined anonymous function is created   erd type tocreate method
//     sayHello:  function(){
//         console.log('hello');
//     },
    
    //ES6 version  4th type to create function
//     Hello(){
//         console.log('hello rahil');
//     }


    
// };
// console.log(person.name);   //dot notition access (recomended)
// console.log(person['age']); //array type acess
// console.log(person['last name']);    //with space doesnt work on dotnotation so we avoid space  
// console.log(person.lastname);  //if the property is not defined then in output it will undefuned
// console.log(person); //if we want to display all properties


// person.name='yusuf' //modify and add properties works same way
// person.place='surathkal'
// console.log(person.name);
// console.log(person.place);

//delete property
// delete person.city;
// console.log(person);

//to check weather property is assigned or not
// console.log('height' in person); //here in values returns true or false 

//iterate over properties of object
// for(let key in person){
   // console.log(key); //only name
   // console.log(person[key]); //only value
//     console.log(key+':'+person[key]); //name +value
// }

//function /method /action
//1st type by anonymous function
// person.sayhello = function(){
//     console.log('hello');
// }
// person.sayhello();

        // //2nd type
// function greet(){
//     console.log('Rahil ');
// }
// person.sayhello=greet;
// person.sayhello();

//3rd type (above)
// person.sayHello();


//4th type es6 version
// person.Hello();



//this keyword

// let person={
//     name:'Rahil',
//     age:'20',
//     city:'Mangalore',
//     sayhello(){
//         console.log('I am '+ this.name +' and i am '+ this.age +' old.i opted '+ details.branch+' branch')
//     }//here this is used to access the property of same object which the method function is defined
    
// }

// let details={
//     phnnumber:6366298441,
//     branch:'ISE',

// }
// person.sayhello();