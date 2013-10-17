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
}else if (time === ""){ //this else if statement contains the validation statement for the time variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter a valid amount of reservations and current time."); //this is the printout of the error alert if the time variable is left blank.
	alert("Please enter a valid amount of reservations and/or current time."); //this is the alert if the time variable is left blank.
}else if(time >= checkInTime && reservation > 0){ //this else if statement represents that the required minimum check in time AND at least one current reservation are met in order to be able to check in.
	console.log("You may check into your hotel room."); //this is the printout showing the requirements have been met and the guest is able to check into their room.
	alert("You may check into your hotel room."); //this is the alert showing the requirements have been met and the guest is able to check into their room.
}else if(time <= checkInTime && reservation > 0){ //this else if statement represents that the required minimum check in time AND at least one current reservation have not been met in order to be able to check in.
	console.log("You will need to wait until after 3 p.m. to check in."); //this is the printout showing the requirements have not been met and the guest is not able to check into their room.
	alert("You will need to wait until after 3 p.m. to check in."); //this is the alert showing the requirements have not been met and the guest is not able to check into their room.
}else{ //this else statement is for all the other optional inputs that could be entered and equals the false answer for the statement.
	console.log("Please see the front desk."); //this is the printout for the error message for the false answer.
	alert("Please see the front desk."); //this is the alert for the error message for the false answer.
}