//Functions

//Functions = "Normal Functions"


//function skeleton
//function functionName (parenthesis are for parameters) { 
	//code the function will run
//}

//Functions - Basic Stucture


function outptMsg(){
	console.log("Hello World.");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

//Function Execution
//function has to be called or invoked in order for it to run

function outptMsg(){
	console.log("Hello World.");
}

outptMsg();


function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}
 
calcArea(); //invokation of the function
calcArea(); //makes code repeatable and resuable
calcArea();


//Function - Arguments and Parameters
//Skeleton
//funcName(argument1, argument2);

//function funcName(parameter1, parameter2){
	//code the function runs
//}

calcArea(30, 20);

function calcArea(w, h){//w=30, h=20
	var area = w * h;
	console.log(area);
}

function dogYears(){
	var age = 4;
	var dogYears = age * 7;
	console.log("Sparky is" +" "+ dogYears +" "+ "years old")
}

dogYears();
dogYears();


//------------------"Passing"
function dogYears(age){ //parenthesis call parameters - storage container for arguments - parameters in function definition
	var dogYears = age * 7;
	console.log("Sparky is" +" "+ dogYears +" "+ "years old")
}
var age1 = 4; //option for passing values
dogYears(age1); //passing the value 4 to age parameter -- argument is in the function invokation or call of the parameter
dogYears(5); //passing the value 5 to age parameter


//Returning Values
//return values going out of the function

calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area; //gets info from function out of the function -- information is being returned to calcArea found above function
}
console.log(area); //not recognized outside the function

//how to get information out of the function once it's calculated?

var total = calcArea(30, 20); //assigns var to function - whatever that function returns, store that into the variable "total"

function calcArea(w, h){
	var area = w * h;
	return area; //function spitting the info out
}
console.log(total); //call variable that function is being returned to




//Functions vs Procedure
//this is a function - function returns values
function calcAreaF(width, height){
	var area = width * height;
	return area;
}


//this is a procedure - procedures list out operations
function calcAreaP(width, height){
	var area = width * height;
	console.log(area); //no return
}




//Functions - Anonymous Functions = created and given a name at the same time the function is executed 
//Anonymous functions have to be defined / declared BEFORE it is invoked or called.


//Also called closures - executes at the same time as the function is created
//Function still has to be "called" by assigning a name to the function

function functionName(){ //example of initial function setup
	//code to run	
}


var functionName = function(){ //much more common structure
	//code to run
}


//Anonymous function version of calcArea function 
var calcArea = function(width, height){
	//code the function runs
	var area = width * height;
	return area;
}

var a = calcArea(20, 30); //invoking

console.log(a);












