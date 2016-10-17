// variables used to access the elements on the DOM
var clearBTN = document.getElementById("clearButton");
var submitBTN = document.getElementById("submitButton");
var celsiusBTN = document.getElementById("celsius");
var fahrenheitBTN = document.getElementById("fahrenheit");
var enteredNumber = document.getElementById("enteredNum");
var finalResult = document.getElementById("results");


// event listener for Clear button
submitBTN.addEventListener("click", determineConverter);
clearBTN.addEventListener("click", clearInputs);

// adding the "enter" functionality to the paragraph element for temp input
enteredNum.addEventListener("keyup", function(event){
		if(event.keyCode == 13){
			determineConverter();
		}
});


// functions used to convert from C to F and back again

function toCelsius(temp) {
	var convertedCelsius = (temp - 32) * (5 / 9);
	return convertedCelsius.toFixed(1);
}

function toFahrenheit(temp) {
  var convertedFahrenheit = temp * (9/5) + 32;
  return convertedFahrenheit.toFixed(1);
}

// function used to clear the from

function clearInputs() {
  enteredNumber.value="";
  finalResult.innerHTML="";
  console.log();
}

// function used to submit the entered enteredNumber

function determineConverter() {
	if (fahrenheitBTN.checked) {
		var temp = toCelsius(enteredNumber.value);
		finalResult.innerHTML= "Your temperature in Celsius is " + "<span id='tempColor'>" + temp + "</span>" + " degrees!";
		  if (temp < 0){
		  	document.getElementById("tempColor").classList.add("blue");
		  }
		    
		   else if (temp > 32) {
		  	document.getElementById("tempColor").classList.add("red");
		   }
		   else{
		  	document.getElementById("tempColor").classList.add("green");
		   }
		}
	else {
		var temp =toFahrenheit(enteredNumber.value);
		finalResult.innerHTML= "Your temperature in Fahrenheit is " + "<span id='tempColor'>" + temp + "</span" + " degrees!";
				if (temp < 32) {
		  	document.getElementById("tempColor").classList.add("blue");
		 		 }
		    
		   	else if (temp > 90) {
		  	document.getElementById("tempColor").classList.add("red");
		   	}
		   else{
		  	document.getElementById("tempColor").classList.add("green");
		   }

	}
};






