function tipCalculator(bill){
	switch(true){
		case bill >= 200:
			return tip = bill * 0.1;
			break;
		case bill >= 50 && bill < 200:
			return tip = bill * 0.15;
			break;
		default:
			return tip = bill * 0.2;
			break;
	}
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));