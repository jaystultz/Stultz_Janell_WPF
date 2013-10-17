//Janell Stultz 10/17/2013 Conditionals_Personal

//If I make use the bread that is left sandwiches for my children, then will there be enough bread left to make one for me?

//givens
var breadTotal = prompt("We are calculating if there will be enough bread left over to make a sandwich for yourself after making sandwiches for your children.  \nPlease enter total amount of bread slices you have."); //this variable represents the number of bread slices I have.
var sandwiches = prompt("How many sandwiches do you need to make for your children?"); //this variable represents the total amount of sandwiches that I need to make for my children.
var breadForSandwich = 2; //this variable represents how many pieces of bread is needed for one sandwich.
//if there is enough bread, print to the console "Yes, there is enough bread for your sandwich!"
//if there is not enough, print "There is not enough bread.  Today is not your day for a sandwich."
(breadTotal === "") ? console.log ("Please enter a valid amount of bread and sandwiches.") & alert("Please enter a valid amount of bread and sandwiches.") : //This is an example of ternary operator that includes the validation statement for variable breadTotal.  The printout and alert for the required information in the prompt is also listed here.  
(sandwiches === "") ? console.log("Please enter a valid amount of bread and sandwiches.") & alert("Please enter a valid amount of bread and sandwiches.") : //This is an example of ternary operator that includes the validation statement for variable sandwiches.  The printout and alert for the required information in the prompt is also listed here.  
(breadTotal - breadForSandwich * sandwiches >= breadForSandwich) ? console.log("Yes, there is enough bread for your sandwich!") & alert("Yes, there is enough bread for your sandwich!") : //This represents the mathematical calculation of whether or not there will be enough bread left over for my sandwich after making them for my kids.  Printout and alert also found here for the "true" statement.
