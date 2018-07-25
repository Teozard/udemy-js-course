var jonh = {
	fullName: "Jonh Smith",
	bills: [123, 48, 268, 180],
	caclcTips: function() {
		this.tipAmout = [];
		this.finalSum = [];

		for (var i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];

			switch (true) {
				case this.bills[i] < 50:
					percentage = .2;
					break;
				case this.bills[i] >= 50 && this.bills[i] <= 200:
					percentage = .15;
					break;
				default:
					percentage = .1;
					break;
			}
			this.tipAmout.push(bill * percentage);
			this.finalSum.push(bill + (bill * percentage));
		}
	}
};
jonh.caclcTips();

var mark = {
	fullName: "Mark Weiss",
	bills: [77, 375, 110, 45],
	caclcTips: function() {
		this.tipAmout = [];
		this.finalSum = [];

		for (var i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];

			switch (true) {
				case this.bills[i] < 100:
					percentage = .2;
					break;
				case this.bills[i] >= 100 && this.bills[i] <= 300:
					percentage = .1;
					break;
				default:
					percentage = .25;
					break;
			}
			this.tipAmout.push(bill * percentage);
			this.finalSum.push(bill + (bill * percentage));
		}
	}
};
mark.caclcTips();

function calculateAvg(tips) {
	let sum = 0;
	for (let i = 0; i < tips.length; i++) {
		sum = tips[i] + sum;
	}
	return sum / tips.length;
}


console.log("Jonh's bills");
console.log(jonh.bills);
console.log(jonh.tipAmout);
console.log(jonh.finalSum);

console.log("Mark's bills");
console.log(mark.bills);
console.log(mark.tipAmout);
console.log(mark.finalSum);

console.log("Average for Jonh");
jonh.average = calculateAvg(jonh.tipAmout);
console.log(jonh.average);

console.log("Average for Mark");
mark.average = calculateAvg(mark.tipAmout);
console.log(mark.average);


console.log("Compare Average");
if (mark.average > mark.average) {
	console.log("Jonh's family paid higher tips on average");
} else if (mark.average < mark.average) {
	console.log("Mark's family paid higher tips on average");
} else {
	console.log("Families paid the same amout of tips in average");
}