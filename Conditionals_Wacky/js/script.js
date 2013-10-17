//Janell Stultz 10/17/2013 - Assignment: Conditionals_Wacky

//If you have a reservation and it is after 3pm, then you may check into your hotel room.  
//If you have a reservation but it is before 3pm, you must wait until after 3pm to check in.
//If you do not have a reservation, regardless of what time it is, you need to see the front desk for assistance.

//givens
var reservation = prompt("Please enter your number of reservations."); //this variable represents the number of reservations the guest has.
var time = prompt("Please enter the current time to see if there are any rooms available.  \nPlease use military time format."); //this variable represents the current time in military time format.
var checkInTime = 1500; //this variable represents the minimum time that check in is allowed.
if(reservation === ""){ //this if statement contains the validation statement for the reservation variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter a valid amount of reservations and current time."); //this is the printout of the error alert if the reservation variable is left blank.
	alert("Please enter a valid amount of reservations and/or current time."); //this is the alert if the reservation variable is left blank.
