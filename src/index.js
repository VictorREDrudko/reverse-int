module.exports = function reverse (n) {
	if(n > 0) {
		const stringN = String(n)
		 if(stringN.length == '2') {return + (stringN[1] + stringN[0])}
		 if(stringN.length == '3') {return + (stringN[2] + stringN[1] + stringN[0])}
		 if(stringN.length == '4') {return + (stringN[3] + stringN[2] + stringN[1] + stringN[0])}
}

	if(n < 0) {
		const stringN = String(-n)
		 if(stringN.length == '2') {return + (stringN[1] + stringN[0])}
		 if(stringN.length == '3') {return + (stringN[2] + stringN[1] + stringN[0])}
		 if(stringN.length == '4') {return + (stringN[3] + stringN[2] + stringN[1] + stringN[0])}
	}
}
