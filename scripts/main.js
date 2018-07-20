/*

//LECTURE 2-8
//BASIC

var firstName = "Jonh";
console.log(firstName);

var lastName = "Smith";
var age = 26;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

// LECTURE 2-9
// Object mutations

var firstName = "Jonh";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;

console.log(
	firstName +
		" is a " +
		age +
		" year old" +
		job +
		". Is he married? " +
		isMarried
);

// var mutation
age = "twenty eight";

console.log(
	firstName +
		" is a " +
		age +
		" year old" +
		job +
		". Is he married? " +
		isMarried
);


// LECTURE 2-10
// Basic operators

var now, yearJonh, yearMark, ageJonh, ageMark;

now = 2018;
ageJonh = 28;
ageMark = 33;

//math operators
yearJonh = now - ageJonh;
yearMark = now - ageMark;

console.log(yearJonh);

console.log(now + 2);
console.log(now * 2);
console.log(now /10);

//logical operators
var jonhOlder = ageJonh < ageMark;
console.log(jonhOlder);

var jonhOlder = ageJonh > ageMark;
console.log(jonhOlder);


// typeof operator 
console.log(typeof jonhOlder);



//LECTURE 2-11
//OPERATOR PRECEDENCE

var now = 2018;
var yearJonh = 1989;
var fullAge = 18;

var isFullAge = now - yearJonh >= fullAge;
console.log(isFullAge)

var ageJonh = now - yearJonh;
var ageMark = 35; 
var average = (ageJonh + ageMark) / 2; 

console.log(average);

//Multiple assignments 
var x, y; 
x = y = (3+5) * 4 -6; 
console.log(x, y);

//more opertors 
x *=2;
console.log(x);

//if else

var firstName = "jonh";
var civilStatus = 'single';

if (civilStatus === 'married'){
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon');
}

var isMarried = false;

if (isMarried){
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon');
}


//boolean

var firstName = 'John';
var age = 26;

if (age < 13) { 
	console.log(firstName + ' is a boy.');
}
else if(age >= 13 && age <= 20) { 
	console.log(firstName + ' is a teenager.');
}
else if(age > 20 && age < 30) { 
	console.log(firstName + ' is a young man.');
}
else { 
	console.log(firstName + ' is a man.');
}
 is a young man

//ternary operator and switch statemets

//ternary operator
var firstName = "John";
var age = 300;

age >= 18
	? console.log(firstName + " drinks beer")
	: console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

//switch

var job = "teacher";
switch (job) {
	case "teacher":
		console.log(firstName + " teacher kids how to code");
		break;
	case "driver":
		console.log(firstName + " drives an uber in Lisbon");
		break;
	case "desinger":
		console.log(firstName + " design beautiful websites");
		break;
	default:
		console.log(firstName + " does something else");
		break;
}

switch (true) {
	case age < 13:
		console.log(firstName + " is a boy.");
		break;
	case age >= 13 && age <= 20:
		console.log(firstName + " is a teenager.");
		break;
	case age > 20 && age < 30:
		console.log(firstName + " is a young man.");
		break;
	default:
		console.log(firstName + " is a man.");
		break;
}



//Truthy and Falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN - will be comverted to false
// when evaluated in if/else condition

//truthy values: NOT falsy values

var height;

height = 23;
if (height || height === 0) {
	console.log("Variable is defined");
} else {
	console.log("Variable is not defined");
}

//equality operator
if(height == 23){
	console.log("The == operator does type coercion");
}


//functions
function caclAge(birthYear) {
	return 2018 - birthYear;
}

function yearUntilRetirement(year, firstName) {
	var age = caclAge(year);
	var retirement = 63 - age;

	if (retirement > 0) {
		console.log(firstName + " retirement is " + retirement + " years");
	} else {
		console.log(firstName + " is already retired.");
	}
}

yearUntilRetirement(1993, "Vas");


var whatDoYouDo = function(job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teaches kids how to code";
		case "driver":
			return firstName + " drives a cab to Lisbon";
		case "desinger":
			return firstName + " design beautiful websites";
		default:
			return firstName + " does something else";
	}
};

console.log(whatDoYouDo("teacher", "jonh"));
console.log(whatDoYouDo("driver", "tom"));
console.log(whatDoYouDo("desinger", "mark"));


//Arrays

// init new array
var names = ["Jonh", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);
// mutate array data
names[1] = "Ben";
console.log(names);
names[names.length] = "Marry";
console.log(names);

// Different data types
var jonh = ["Jonh", "Smith", 1990, "teacher"];

jonh.push("blue");
jonh.unshift("Mr.");
console.log(jonh);

jonh.pop();
jonh.shift();
console.log(jonh);

console.log(jonh.indexOf(1990));

var isDesigner =
	jonh.indexOf("desinger") === -1
		? "Jonh is not a desinger"
		: "Jonh IS a desinger";

console.log(isDesigner);

*/