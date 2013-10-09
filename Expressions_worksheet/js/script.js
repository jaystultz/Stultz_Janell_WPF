//Janell Stultz 10/9/13 Expressions Worksheet

//Dog Years

var sparkyAge = 5;
const humanYears = 7;

//multiply sparkyAge and humanYears & assign to dogYears variable.
var dogYears = sparkyAge * humanYears;

//print out to the output dog years
console.log("Sparky is" +" "+ sparkyAge +" "+ "human years old which is" +" "+ dogYears +" "+ "in dog years.");


//Slice of Pie part 1

var pizzaSlices = 10;
var partyPeople = 20;
var pizzas = 5;

//multiply pizzaSlices and pizzas then divide by partyPeople & assign to slicesPerPerson
var slicesPerPerson = pizzaSlices * pizzas / partyPeople;

//print out to the output slices per person
console.log("Each person ate" +" "+ slicesPerPerson +" "+ "slices of pizza at the party.");


//Slice of Pie part 2

var pizzaSlices = 10;
var partyPeople = 20; 
var pizzas = 5;

//multiply pizzaSlices and pizzas then use modulo operator to show the remainder that Sparky gets to eat
var slicesPerPerson = pizzaSlices * pizzas % partyPeople;

//print out to the output slices per person
console.log("Sparky got" +" "+ slicesPerPerson +" "+ "slices of pizza.");


//Average Shopping Bill

var groceryBills = [152, 183, 201, 175, 109];

//add total bills together
var total = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];

var average = total / 5;

//print out to the output total and average 
console.log("You have spent a total of" +" "+ "$" + total +" "+ "on groceries over 5 weeks.  That is an average of" +" "+ "$" + average +" "+ "per week.");


//Discounts

var originalPrice = 50;
var discountPercentage = 5;
discountPercentage /= 100 ;
var itemDescription = "jeans";
var taxPercentage = 7;
