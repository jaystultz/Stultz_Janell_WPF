//Janell Stultz 10-19-2013 Functions Worksheet

//Circumference - calculate the circumference of a circle

	//basic skeleton set up for an anonymous function
var circleCirc = function(radius){	//replace functionName with proper name for the function & enter the proper parameter 
	var circ = radius * 2 * 3.14;  //this variable represents the formula for finding the circumference of a circle.  The "2" and "3.14" are constant values.
	return circ;  //the return element retrieves and spits out the information (answer) for this function.  This value will not be stored using the return element.
}

var circumference = circleCirc(7);  //this variable represents where the function is being returned to.  It is outside of the function.
							//the amount found in the above parenthesis represents the function's argument.

console.log("The circumference of the circle is" +" "+ circumference +"."); //print the answer to the console.


//Stung! - calculate how many bee stings are needed to kill an animal
var killerStings = function(weight){	//replace functionName with the function's proper name. Add in the proper parameter.
	var stings = weight * 8.666666667; //this variable represents the mathematics that will be used to complete this problem.  The weight varies but the 8.666666667 remains constant.
	return stings; //this element retrieves and spits out the answer for this function.  This value will not be stored using the return element.
}
