//Janell Stultz 10/16/2013 - Assignment: Conditionals_Industry

//If I sign > the client quota and I complete > minimum projects, I will get a promotion.  If I do not complete one or both of these requirements, I will not get a promotion.

//givens
var clients = prompt("How many clients have you signed?"); //this variable represents the number of clients the employee has signed.
var projects = prompt("How many projects have you completed?"); //this variable represents the number of projects the employee has successfully completed.
var clientQuota = 5; //this variable represents the minimum number of clients signed that is required for the employee to receive a promotion.
var minimumProjects = 7; //this variable represents the minimum number of completed projects that is required for the employee to receive a promotion.
if(clients === ""){ //this if statement contains the validation statement for the clients variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
