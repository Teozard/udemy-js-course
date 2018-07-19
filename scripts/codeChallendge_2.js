var teamJohn, teamMark, teamMarry;

teamJohn = (1423 + 134 + 105) / 3;
teamMark = (1423 + 134 + 105) / 3;
teamMarry = (1423 + 134 + 105) / 3;

switch (true) {
	case teamMark > teamJohn && teamMark > teamMarry:
		console.log(
			"Team Mark has won with the average score " +
				teamMark +
				" over Team John: " +
				teamJohn +
				" and Team Marry: " +
				teamMarry
		);
		break;
	case teamJohn > teamMark && teamJohn > teamMarry:
		console.log(
			"Team John has won with the average score " +
				teamJohn +
				" over Team John: " +
				teamMark +
				" and Team Marry: " +
				teamMarry
		);
		break;
	case teamMarry > teamMark && teamMarry > teamJohn:
		console.log(
			"Team Marry has won with the average score " +
				teamMarry +
				" over Team Mark: " +
				teamMark +
				" and Team John: " +
				teamJohn
		);
		break;
	case teamMarry == teamMark && teamMarry == teamMark:
		console.log(
			"Its a draw!: "
			 + teamJohn + " : "
			 + teamMark + " : "
			 + teamMarry
		);
		break;
}