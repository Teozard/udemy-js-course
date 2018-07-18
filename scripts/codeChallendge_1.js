var markWeight, markHeight, jonhWeight, jonhHeight;

//parameters, height in meters, weight in kgs 
markWeight = 90;
markHeight = 1.8;

jonhWeight = 75;
jonhHeight = 1.83;

//BMI calculations 
var markBMI = markWeight / (markHeight*markHeight);
var jonhBMI = jonhWeight / (jonhHeight**2);

//debug output 
console.log(markBMI, jonhBMI);

var isHigherBMI = markBMI > jonhBMI;

//final output
console.log("Is MArk's BMI higher than John's? " + isHigherBMI)