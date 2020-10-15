// creating object

var details={
	name:"Apssdc",
	year:2015,
	courses:["webdesign using react","python","ml","PWA"]
}

// for loop syntax and functionality of working

// for(var i=0;i<details.courses.length;i++){
// document.write(details.courses[i]+"<br>");
// }

// for-in(object,Array) 

// for(var i in details.courses){
// 	document.write(details.courses[i]+"<br>")
// }

// for-of(strings,array not object)
 
 // var name="APSSDC react";
 // for(var i of details.courses){
 // 	document.write(i,"<br>");
 // }

 // var age=18;
 // if(age==18){
 //   document.write("you are  major");
 // }else if(age>18){
 //    document.write("you are above 18")
 // }else{
 // 	document.write("you are minor")
 // }

 // ternary operator(?)
 // syntax: condition ? if true : else
// var age=20;
// var status = (age>=18) ? 'adult' : 'minor';
// document.write(status);

// predefined or builtin functions

// Examples: Date(),String(),Number() etc..

// user-defined functions

function addition(a,b){
     window.alert(a+b);
}
addition(89,11);

