//Janell Stultz 10/23/2013 - Assignment: Functions_Industry

//In order to find out whether or not I have written any patient run reports today, I will answer the questions when prompted.
//givens
var transports = prompt("We are calculating if you wrote any run reports today.  \nHow many transports did you have today?"); //this variable represents how many transports were completed during my shift.
var cancels = prompt("How many cancels did you have today?"); //this variable represents how many canceled calls I worked in a shift.

var totalCalls = function(transports, cancels){ //this variable represents the function used to find out if there were run reports written.
	var calls =  transports + cancels; //this variable represents the total number of calls regardless of whether they were transports or cancels.  
}

totalCalls(); //this represents the invocation of the function

//this is an example of ternary operator
(transports === "") ? console.log ("Please enter a valid number.") & alert("Please enter a valid number.") : //this if statement contains the validation statement for the clients variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
(cancels === "") ? console.log("Please enter a valid number.") & alert("Please enter a valid number.") : //this if statement contains the validation statement for the clients variable meaning that this statement checks to ensure that the variable is not left blank.  If it is blank, an error alert is produced.
totalCalls = (transports && cancels > 0) ? console.log("Yup, you wrote some run reports today.") & alert("Yup, you wrote some run reports today.") : console.log("Must have been a slow day because you didn't write any run reports.") & alert("Must have been a slow day because you didn't write any run reports."); //these are the printouts that will be seen depending on what answers are given in the prompts.  If calls > 0 then reports are written.  If calls < 0, then no reports are written.  

