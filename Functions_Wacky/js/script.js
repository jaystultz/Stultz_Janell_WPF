//Janell Stultz 10/23/2013 - Assignment: Functions_Wacky

var large = prompt ("How many large sized packages are you shipping?"); //this variable represents how many large packages are being shipped.
var medium = prompt ("How many medium sized packages are you shipping?"); //this variable represents how many medium packages are being shipped.
var small = prompt ("How many small sized packages are you shipping?"); //this variable represents how many small packages are being shipped.

function shipCost(large, medium, small){ //this is the "normal" function to find out the total cost of shipping based on the number of each sized packages being shipped multiplied by the individual cost to ship that particular size.  
	var largeRate = 9.95; //this variable represents the cost for one large package.
	var medRate = 7.95; //this variable represents the cost for one medium package.
	var smRate = 5.95; //this variable represents the cost for one small package.
	var cost = (large * largeRate) + (medium * medRate) + (small * smRate); //this variable represents the total shipping cost based on the number of each sized packages multiplied by their individual costs to ship then added together.
	return cost; //this represents the "finished product" or "total" of the function
}

shipCost(); //this represents the invocation of the function

if(large === ""){ //this if statement contains the validation statement for the input variables meaning that this statement checks to ensure that the variables are not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter valid amounts."); //this is the printout of the error alert if the clients variable is left blank.
	alert("Please enter valid amounts."); //this is the alert of the error alert if the clients variable is left blank.
}else if(medium === ""){ //this statement contains the validation statement for the input variables meaning that this statement checks to ensure that the variables are not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter valid amounts."); //this is the printout of the error alert if the clients variable is left blank.
	alert("Please enter valid amounts.");//this is the printout of the error alert if the clients variable is left blank. 
}else if(small === ""){ //this statement contains the validation statement for the input variables meaning that this statement checks to ensure that the variables are not left blank.  If it is blank, an error alert is produced.
	console.log("Please enter valid amounts."); //this is the printout of the error alert if the clients variable is left blank.
	alert("Please enter valid amounts."); //this is the printout of the error alert if the clients variable is left blank.
