/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/

//input: a number between 1 and 2^16th
//output: a boolean result true or false
//purpose: to test whether a number is prime or not. A prime number is a number that is only divisible by itself and one


// Your code
	//create a loop that initializes at zero and goes through numbers one by one
		//conditional statment to check if number is 1 or 2
		//create a conditional statement that checks if the number is divisible by itself and all 
			//if yes return true
			//if
			function isPrime(num) {
				if (num === 1){
					return false;
				}
				for (var i = 2; i < num; i++){
					if (num === 2){
						return true;
					}
					else if	(num % i === 0) {
						return false;
					}
				}
				return  true;
			}
			
			var result = isPrime(1)
			console.log(result) // false
			
			var result = isPrime(2)
			console.log(result) // true
			
			var result = isPrime(3)
			console.log(result) // true
			
			var result = isPrime(4)
			console.log(result) // false
			
			var result = isPrime(29)
			console.log(result) // true
			
			var result = isPrime(51)
			console.log(result) // false