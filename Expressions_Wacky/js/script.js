//Janell Stultz 10/10/13 Expressions_Wacky

//Calculating how many miles needed to run in order to burn off calories from milk, cookies and ice cream.

var cookies = prompt("We are calculating how many miles needed to run in order to burn off calories from cookies, milk and ice cream.  \nPlease enter how many cookies you ate."); //how many cookies a person ate.
var milk = prompt("Please enter how many 8 oz. glasses of milk you drank."); //how many glasses of milk a person drank.
var iceCream = prompt("Please enter how many scoops of ice cream you ate."); //how many scoops of ice cream a person ate.
var totalCalories= 150 * cookies + 130 * milk + 150 * iceCream; //multiply through then add each product to determine how many calories were consumed.
console.log(totalCalories); //prints the total calories out to the console.
var miles = totalCalories / 150; //this var takes the total amount of calories and divides it by 150 which is a rough average of how many calories a person burns each mile they run. 
console.log(miles); //prints how many miles needed to run to the console.
