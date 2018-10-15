//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//input: string
//output: an array
//purpose: to match each element with its base pair AT & CG and return an array of base pairs.
//create an empty array that holds the pairArray
//split the string into characters
//create a for loop that loops through the result of the split (is it an array?)
  //conditional statement that checks to see if it strictly equal to any of the possible letters and then adds the appropriate corresponding letter
  //add it to pairArray by pushing it

  function pairElement(str) {
    var pairArray =[];
    var splitString = str.split("");
    for (var i = 0; i < splitString.length; i++){
      if (splitString[i] === "G"){
        var basePair = ["G","C"];
        pairArray.push(basePair);
      } else if (splitString[i] === "C"){
        var basePair = ["C","G"];
        pairArray.push(basePair);
      } else if (splitString[i] === "A"){
        var basePair = ["A","T"];
        pairArray.push(basePair);
    } else {
      var basePair = ["T","A"];
      pairArray.push(basePair);
    }
  }
    return pairArray;
  };
  
  var results = pairElement("GCG");
  console.log(results);

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]