//add an event listener to call a function on button click
				 //takes in two paraemeters event click and then it will add a function
				 //inputs: elements from the form, strings the user supplies
				 //outputs: sentence, a string displayed to the user
				 //create a function
					 //Get values from form
					 //Append values concatenated in a sentence to the DOM
				//create an event listener that listens for a click of the button with an id of lib-button
					//When clicked the event function should call teh makeMadLib function
                    function makeMadLib () {
                        var noun = $("#noun").val();
                       //var noun = document.getElementById("noun").value;
                       var adjective = $("#adjective").val();
                       //var adjective = document.getElementById("adjective").value;
                       var person = $("#person").val();
                       //var person = document.getElementById("person").value;
                       var madLib = "Once upon a time I met a person named " + person + ". They were very " + adjective + ". They brought me a(n)" + noun;
                       $("#story").append("<p>" + madLib + "</p>");
                       var object = {};
                           object.noun = noun;
                           object.adjective = adjective;
                           object.person = person;
                           return object;
                       }
                   $( "#lib-button" ).on("click", function(){
                       var userObject = makeMadLib();
                       console.log(userObject);
                   })