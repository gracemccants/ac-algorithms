/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.


Hint 1: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/
//input - string
//output - string with every letter's case swapped
//purpose - to use loops and methods to manipulate a string
//split to into an array
	//store the array in a variable
	//create a variable to store the output of the loop into a string	
	//add a for loop
		//conditional statement to see if the character you are on is uppercase
			//if true make lowercase and add to the variable storing the output from our loop
			//if false make uppercase and add to the variable storing the output from our loop
	//return the string aka the variable storing the output from our loop
	//console log the variable above to show in the console

	function swapCase(str) {
		var charArray = str.split("");
		var newString = "";
		for (var i = 0; i < charArray.length; i++){
			if (charArray[i] === charArray[i].toUpperCase()){
				newString = newString + charArray[i].toLowerCase();
			} else {
				newString = newString + charArray[i].toUpperCase();
			}
		}
	  return newString;
	}
	var result = swapCase("Hello World")
	console.log(result) // "hELLO wORLD"