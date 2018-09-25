/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/

//inputs: a string (no nubers or punctuation)
//outputs: a string in alphabetical order

//what does the function do? what is its purpose?
	//splits the string's words into an array of characters
	//get rid of the spaces using trim
	//store the resulting array in a variable
	//sort the array into alphabetical order
	//join the elements in the array back into a string taking in the .join() argument ''
	//get rid of the space using trim

function alphabetSoup(str) {
	// method chaining var chars = str.split('').chars.sort().array.join('').newArray.trim();
	var chars = str.split('');
	var array = chars.sort();
	var newArray = array.join('');
	var string = newArray.trim();

	return (string);
}
var result = alphabetSoup("my string oh my");
console.log(result)