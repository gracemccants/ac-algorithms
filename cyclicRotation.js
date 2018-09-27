///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\

//input: an array of numbers and a number
//output: rotated array
//purpose: to take in an array and shift its elements to the right by one position for the given input number

function cyclicRotation(arr, rotation){
    //use a for loop to make it happen a number of times K
    for (var i = 0; i > rotation; i++) {
        //use .pop to grab the last element in the array and save the output of the .pop into a variable
        var lastNumber = arr.pop();
        //unshift (add to the beginning) the variable to the beginning of the array
        arr.unshift(lastNumber);
    }
    //return the array
    return arr;
}
var result = cyclicRotation([3, 8, 9, 7, 6], 1);
console.log(result);