//Janell Stultz 10/10/13 Expressions_Industry

//Calculating total and average time spent coding
var monday = prompt("We are calculating your total hours per week and average hours per day spent coding.  \nPlease enter enter your hours for Monday."); //this var shows how many hours were spent coding on Monday.
var tuesday = prompt("Please enter enter your hours for Tuesday."); //this var shows how many hours were spent coding on Tuesday.
var wednesday = prompt("Please enter enter your hours for Wednesday."); //this var shows how many hours were spent coding on Wednesday.
var thursday = prompt("Please enter enter your hours for Thursday.");//this var shows how many hours were spent coding on Thursday.
var friday = prompt("Please enter enter your hours for Friday."); //this var shows how many hours were spent coding on Friday.  
var hoursCoding = [monday, tuesday, wednesday, thursday, friday]; //var for the array showing amount of hours coding per day for a week.
console.log(hoursCoding); //prints the array to the console and lists out the hours coding.
var totalHours = Number(monday) + Number(tuesday) + Number(wednesday) + Number(thursday) + Number(friday); //totaling up the amount of hours worked coding for the week.
console.log(totalHours); //prints total hours to console.
var averageHours = totalHours / 5; //Dividing the total amount of hours spent coding by the number of days worked shows the average hours per day that were spent coding each day.  
console.log(averageHours); //prints average to the console.
var result = "You worked a total of" +" "+ totalHours +" "+ "this week.  You averaged" +" "+ averageHours +" "+ "hours per day.";  //The result of the calculation.
