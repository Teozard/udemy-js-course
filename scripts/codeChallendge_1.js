var markWeight, markHeight, jonhWeight, jonhHeight;

//parameters, height in meters, weight in kgs 
markWeight = 45;
markHeight = 1.6;

jonhWeight = 75;
jonhHeight = 1.83;

//BMI calculations 
var markBMI = markWeight / (markHeight**2);
var jonhBMI = jonhWeight / (jonhHeight**2);

//debug output 
console.log(markBMI, jonhBMI);

if(markBMI > jonhBMI){
	console.log('Mark\'s BMI is higher then Jonh\'s ');
} else {
	console.log('Jonh\' BMI is higher then Mark\'s ');
}

//var isHigherBMI = markBMI > jonhBMI;
//console.log("Is MArk's BMI higher than John's? " + isHigherBMI)

