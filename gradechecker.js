let mygrades = function(currentMarks , totalMarks , one = 100 ){
    let grades = (currentMarks / totalMarks) * one;
    let grade = '';
    //making conditions
    if(grades >= 90){
        grade = `A`;
    } else if (grades >= 80){
        grade =  `B`;
    }else if (grades >= 70){
        grade = 'C'
    }else{
        grade = 'F'
    }
    return `you have an average of ${grade} and your ${grades}`
}
console.log(mygrades(90,100))