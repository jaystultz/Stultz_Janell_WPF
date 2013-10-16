//Janell Stultz 10-15-2013 Conditionals Worksheet

//Last chance for gas

//givens
var mpg = 32;
var amountInTank = 25;
var tankSize = 14;
var distance = 200;
 
//if there is enough gas, print to the console "Yes, you can make it without stopping for gas!"
//if there is not enough, print "You only have X gallons of gas in your tank, better get gas now while you can!"

//multiply miles per gallon, tank size, and the amount in the tank in percent.  If total is more than 200 then you can make it.  If not then you need to stop.
//example of ternary operator
(mpg * tankSize * (amountInTank * .01) > distance) ? console.log("Yes, you can make it without stopping for gas!") : console.log("You only have" +" "+ (tankSize * (amountInTank * .01)) +" "+ "gallons of gas in your tank, better get gas now while you can!");


//Grade letter calculator

//given
var grade = 98;

//if a grade falls within a certain range, a certain letter grade is earned.
if (grade >= 95 && grade <= 100){
	console.log("You have a" +" "+ grade + "%, which means you have earned an A+ in the class!");
}else if (grade >= 90 && grade <= 94){
	console.log("You have a" +" "+ grade + "%, which means you have earned an A in the class!");
}else if (grade >= 85 && grade <= 89){
	console.log("You have a" +" "+ grade + "%, which means you have earned an B+ in the class!");
}else if (grade >= 80 && grade <= 84){
	console.log("You have a" +" "+ grade + "%, which means you have earned an B in the class!");
}else if (grade >= 76 && grade <= 79){
	console.log("You have a" +" "+ grade + "%, which means you have earned an C+ in the class!");
}else if (grade >= 73 && grade <= 75){
	console.log("You have a" +" "+ grade + "%, which means you have earned an C in the class!");
}else if (grade >= 70 && grade <= 72){
	console.log("You have a" +" "+ grade + "%, which means you have earned an D in the class!");
}else if (grade >= 0 && grade <= 69){
	console.log("You have a" +" "+ grade + "%, which means you have earned an F in the class!");
}else{
	//any other numbers entered outside of 0-100 returns error message
	console.log("The number entered is outside of the grading scale.");
}


//Tire Pressure

//givens in array
var tirePressures = [31, 31, 31, 32];

//conditional statement
if (tirePressures[0] === tirePressures[1] && tirePressures[2] === tirePressures[3]){
	//if front tires equal each other and rear tires equal each other, then they pass.
	console.log("The tires pass spec!");
}else{
	//if pressures do not match then error message is displayed.
	console.log("Get your tires checked out!");
}
