//Janell Stultz 10/10/13 Expressions_Personal

//Calculating a woman's BMR
var weight = prompt("We are calculating the Basal Metabolic Rate for a woman.  \nPlease enter your weight in kilograms.");
var height = prompt("Please enter your height in centimeters."); //this var collects the woman's height.
var age = prompt("Please enter your age in years."); //this var collects the woman's age.
var bmr= 10 * weight + 6.25 * height - 5 * age; //multiply through then add or subtract each product to determine ideal daily caloric intake.
console.log(bmr); //prints total out to the console
var result = "Your BMR is" +" "+ bmr +" "+ "calories per day"; //this var shows the woman's BMR.
alert(result); //produces an alert for the result of the calculation.
console.log(result); //prints the BMR result out to the console with the strings concatenated.

