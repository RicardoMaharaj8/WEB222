var stuName = "Ricardo Maharaj";
var numCourses = 4;
var program = "CPD";
var job = false;

console.log("My name is " + stuName + " and I'm in " + program + " I'm taking " + numCourses + " courses in this semester.");

var jobStatus;
if (job == true) {
    jobStatus = "have"
} else {
    jobStatus = "don't have"
}

console.log("My name is " + stuName + " and I'm in " + program + " I'm taking " + numCourses + " courses in this semester and I " + jobStatus + " a part-time job now.");

var year = 2019;

var age = prompt("Please enter your age:");

console.log("You were born in the year of " + (year - age) + ".");

var studyYears = prompt("Enter the number of years you expect to study in the college:");

console.log("You will graduate from Seneca College in the year of " + (Number(year) + Number(studyYears) + "."));

var tempCel = 25;

console.log(tempCel + " Celcius is " + ((tempCel * 9 / 5) + 32) + " Fahrenheit");

var tempFah = 60;

console.log(tempFah + " Fahrenheit is " + ((tempFah - 32) * 5 / 9) + " Celcius");


for (i = 0; i < 11; i++) {
    if ((i % 2) == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


function largerNum(a, b) {
    if (a > b) {
        console.log("The larger number of " + a + " and " + b + " is " + a);
    } else {
        console.log("The larger number of " + a + " and " + b + " is " + b);
    }
}

largerNum(22, 102);
largerNum(6, 12);

function evaluator() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    if ((total / (i + 1)) > 50) {
        return true;
    } else {
        return false;
    }
}

var eval1 = evaluator(66, 78, 86, 98, 78, 90, 60);
console.log("Average grater than or equal to 50: " + eval1);

var eval2 = evaluator(50, 49, 70, 77, 66, 56);
console.log("Average grater than or equal to 50: " + eval2);

var eval3 = evaluator(40, 45, 50, 55, 60);
console.log("Average grater than or equal to 50: " + eval3);

function grader(grade) {
    if (grade >= 80) {
        return 'A';
    } else if (grade >= 70) {
        return 'B';
    } else if (grade >= 60) {
        return 'C';
    } else if (grade >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

var mark1 = 66;
var mark2 = 77;
var mark3 = 88;

var grd1 = grader(mark1);
var grd2 = grader(mark2);
var grd3 = grader(mark3);

console.log("Mark of " + mark1 + " is " + grd1);
console.log("Mark of " + mark2 + " is " + grd2);
console.log("Mark of " + mark3 + " is " + grd3);

function showMultiples(num, numMulti) {
    for (var i = 0; i < numMulti; i++) {
        console.log(num + " X " + (i + 1) + " = " + (num * (i + 1)));
    }
}

showMultiples(3, 5);
showMultiples(6, 3);
showMultiples(8, 4);