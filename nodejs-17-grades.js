let grade = function( currentMarks, totalMarks, defualtValue = 100){
	let myGrade = (currentMarks / totalMarks) * defualtValue;

	var resultGrade = `Youre grades are`;

	if (myGrade >=  90 && myGrade <= 100 ) {
		return `${resultGrade} ${myGrade} and Youre a 'A'`;
	 }
	else if(myGrade >=  80 && myGrade <= 90){
		return `${resultGrade} ${myGrade} and Youre a 'B'`;
	 }
	else{
		return `grades not define ${myGrade}`;
	}
}
console.log( grade(64, 30));