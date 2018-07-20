var john = {
	name: "Jonh Smith",
	mass: 75,
	height: 1.8,
	calcMass: function() {
		return (this.BMI = this.mass / this.height ** 2);
	}
};

var mark = {
	name: "Mark Weiss",
	mass: 90,
	height: 1.9,
	calcMass: function() {
		return (this.BMI = this.mass / this.height ** 2);
	}
};

switch (true) {
	case mark.calcMass() > john.calcMass():
		console.log(mark.name + " has the highest BMI: " + mark.BMI);
		break;
	case mark.BMI < john.BMI:
		console.log(john.name + " has the highest BMI: " + john.BMI);
		break;
	default:
		console.log(
			mark.name +
				" and " +
				john.name +
				" have the same BMI. " +
				mark.name +
				" with the " +
				mark.BMI +
				" and " +
				john.name +
				" with the " +
				john.BMI
		);
		break;
}

