//Janell Stultz 10/23/2013 - Assignment: Functions_Personal

var yourAge = prompt("How old are you?"); //this variable represents your age.
var phoneAge = prompt("How old is your phone?  Please enter the number of years you have had your current wireless device."); //this variable represents how long the user has had their current wireless phone.
var contractAge = prompt("How long have you been in your current wireless contract?  Please enter the number of years."); //this variable represents how long the user has been in their current wireless contract.

var phoneUpgrade = function(yourAge, phoneAge, contractAge){ //this variable represents the "anonymous" function used to determine whether or not the user is eligible for a wireless phone upgrade.
	var YourAge = 18; //this variable represents the minimum age required is 18 years old. 
	var phoneAge = 2; //this variable represents the minimum phone age is 2 years old.
	var contractAge = 2; //this variable represents the minimum contract age is 2 years.
	var upgrade = yourAge && phoneAge && contractAge; //this variable represents that variables yourAge, phoneAge, and contractAge all have to be true in order for an upgrade to be available.
	return upgrade; //this represents the "finished product" of the function
}






