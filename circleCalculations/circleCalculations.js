//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

//Input: radius, a number
//Output: value of the calculation (number) OR the sentance (a string)

//Add radius as the parmeter for our function
function circleCalculation (radius) {
	//Calculate the area of the circle, store the value in a variable
	var circleArea = Math.round(Math.PI * Math.pow(radius, 2));
	//Calculate the perimeter, store the value in the variable
	var circlePerimeter = Math.round(2 * Math.PI * radius);
	//Create a sentence that concatenates the values in the sentence
	var sentence = "The area of the circle is " + circleArea + " and the perimeter of the circle is " + circlePerimeter;
	//return the sentence
	return sentence;
}
//Store the value in a variable so you can utilize the value later
var circleSentence = circleCalculation(10);
