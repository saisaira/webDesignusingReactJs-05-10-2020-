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

// function addition(a,b){
//      window.alert(a+b);
// }
// addition(89,11);


// var addition=(a,b)=>{
// 	window.alert(a+b);
// }
// addition(89,11);

// var r1=10;
// var r1=400;
// document.write(r1,"<br>");
// {
// 	var r1=40;
// 	document.write(r1,"<br>");
// }
// document.write(r1);

// let r1=10;
// document.write(r1+"let","<br>");
// {
// 	let r1=40;
// 	document.write(r1+"let","<br>");
// }
// document.write(r1+"let");

// const a=40;
// {
// 	const a=400;
// 	document.write(a,"<br>");
// }
// document.write(a);


// class Square{
// 	constructor(height,width){
//       this.h=height;
//       this.w=width;
// 	}
// }
// var a=new Square("40cm","40cmwidth")
// document.write(a.w);


// var n=[4,9,16,25,36];
// // var s=n.map(Math.sqrt);
// // document.write(s,typeof(s));
// var addition=(num)=>{
// return num*num;
// }
// var s=n.map(addition);

// document.write(s);

// function addition(p1,p2,...s){
// 	document.write(p1+p2,"<br>");
// 	document.write(s[2]);
// }
// addition(1,2,3,4,5,6,7,8,9,90);


// const array=[1,2,3];
// const array1=[...array];
// array1.push(4,5,6,7);
// document.write(array1);

// var n=["swami","sairam","Gauthami","kalyan"];
// var[name1,name2,name3,name4]=n
// document.write(name3)

// let n=2020;
// let message=`THis year is ${n}`;
// document.write(message);