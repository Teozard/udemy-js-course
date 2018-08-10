// Function constructor
/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person("John", 1999, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

// testing 

var Sword = function(itemName, damage, iLvl, neededLvl)
{
  this.itemName = itemName;
  this.damage = damage;
  this.iLvl = iLvl;
  this.neededLvl = neededLvl;
}

var woodenSword = new Sword('Wooden Sword', 5, 1, 1);
console.log(woodenSword);

console.log(woodenSword.itemName);

// Object.create 

var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBorth = 1990;
john.job = 'teacher';



var jane = Object.create(personProto, {
  name: { value: 'Jane'},
  yearOfBirth: {value: 1969 },
  job: {value: 'designer'}
});



// Primitives vs objects 

// primitives 
var a = 23;
var b = a; //hold a copy of a value from a

a = 46;
console.log(a);
console.log(b);

// objects
var obj1 = {
  name:"John",
  age:23
}

var obj2 = obj1; // no copy, simply refers to the obj1, obj2 is the same as obj1
obj1.age = 30;


console.log(obj1.age);
console.log(obj2.age);


// functions
var age = 27;
var obj = {
  name: 'Jonas', 
  city: 'Lisbon'
};

function change(a, b){
  a = 30;
  b.city = "San Francisco";
}


change(age, obj);
console.log(age);
console.log(obj.city);



*/


// Passing functions as arguments 

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCacl(arr, fn){
  var arrRes = [];
  for(var i=0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el){
  return 2016-el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }
    else{
        return -1;
    }
}

var ages = arrayCacl(years, calculateAge); 
var fullAges = arrayCacl(ages, isFullAge);
var rates = arrayCacl(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);







