//Map the Stars!

//Return a new array that transforms the element's average altitude into their orbital periods.

//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

//You can read about orbital periods on wikipedia. https://en.wikipedia.org/wiki/Orbital_period

//The values should be rounded to the nearest whole number. The body being orbited is Earth.

//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

//Helpful Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

//input: an array of objects
//output: a new array
//purpose: transforms the elements average altitude into their orbital periods
//round the number to its nearest whole number - Math.round(x)
//to use exponents use Math.pow(8, 2)
//var a = earthRadius + avgAlt[0,2];
//var orbitalPeriod = (2*pi) * Math.sqrt(Math.pow(a,3)/GM)
//Create a new variable obResult as the output array
//Loop through the elements of the input array
//Calculate the value of the orbitalPeriod
//push the elements into the obResult
//create name key for the object and create the orbitalPeriod key
//return the collection obResult
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var obResult = [];
  for (var i = 0; i < arr.length; i++){
    var a = earthRadius + arr[i].avgAlt;
    var orbitalPeriodCalc = Math.round((2* Math.PI) * (Math.sqrt(Math.pow(a,3)/GM)));
    var calcObj = {};
    calcObj.name = arr[i].name;
    calcObj.orbitalPeriod = orbitalPeriodCalc;
    obResult.push(calcObj);
  }
  return obResult;
}

var result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(result);

//TEST CASES

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
//orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].