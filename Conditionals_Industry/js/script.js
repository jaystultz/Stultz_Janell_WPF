//Janell Stultz 10/16/2013 - Assignment: Conditionals_Industry

//If I sign > the client quota and I complete > minimum projects, I will get a promotion.  If I do not complete one or both of these requirements, I will not get a promotion.

//givens
var clients = prompt("How many clients have you signed?"); //this variable represents the number of clients the employee has signed.
var projects = prompt("How many projects have you completed?"); //this variable represents the number of projects the employee has successfully completed.
var clientQuota = 5; //this variable represents the minimum number of clients signed that is required for the employee to receive a promotion.
var minimumProjects = 7; //this variable represents the minimum number of completed projects that is required for the employee to receive a promotion.
if(clients === ""){ //this if statement contains the validation statement for the clients variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter valid amounts."); //this is the printout of the error alert if the clients variable is left blank.
	alert("Please enter valid amounts."); //this is the alert if the clients variable is left blank.
}else if(projects === ""){ //this else if statement contains the validation statement for the projects variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter valid amounts."); //this is the printout of the error alert if the projects variable is left blank.
	alert("Please enter valid amounts."); //this is alert if the projects variable is left blank.
}else if(clients > clientQuota && projects > minimumProjects){ //this else if statement contains the required variables to produce either a true or false answer.
	console.log("You get a promotion!"); //this is the printout of the true statement 
	alert("You get a promotion!"); //this is the alert of the true statement 
}else{ //this else statement is for all the other optional inputs that could be entered and equals the false answer for the statement.
	console.log("Keep working!");  //this is the printout of the false statement 
	alert("Keep working!"); //this is the alert of the false statement 
}