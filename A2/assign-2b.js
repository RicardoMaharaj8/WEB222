// an array of course objects
var courses = [
    {code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/'},
    {code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/'},
    {
        code: 'ULI101',
        name: 'Introduction to Unix/Linux and the Internet',
        hours: 4,
        url: 'https://cs.senecac.on.ca/~fac/uli101/live/'
    },
    {
        code: 'IOS110',
        name: 'Introduction to Operating Systems Using Windows',
        hours: 4,
        url: 'https://cs.senecac.on.ca/~fac/ios110'
    },
    {code: 'EAC150', name: 'College English', hours: 3, url: null}
];

// prototype object for creating student objects
var student = {
    name: "",
    dob: new Date(),
    sid: "",
    program: "",
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() + ', student id ' + this.sid + ', program ' + this.program + ', current GPA ' + this.gpa;
    }
};

// Start your Part B code here
// Do not change the code above

// Task 1
console.log("");
console.log("*** Task 1 ***");
console.log("");

var removed = courses.pop();
console.log("Courses " + removed.code + " was deleted from the array (courses)");


var ibc233 = {code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'http://scs.senecac.on.ca/~ibc233/'};
var oop244 = {
    code: 'OOP244',
    name: 'Introduction to object oriented programming',
    hours: 4,
    url: 'http://scs.senecac.on.ca/~oop244/'
};
var web222 = {
    code: 'WEB222',
    name: 'Internet I - Internet Fundamentals',
    hours: 4,
    url: 'http://scs.senecac.on.ca/~web222/'
};
var dbs201 = {
    code: 'DBS201',
    name: 'Introduction to object Database Design and SQL',
    hours: 4,
    url: 'http://scs.senecac.on.ca/~dbs201/'
};

console.log("Adding new course objects into the array (courses)");
console.log("");

courses.push(ibc233);
courses.push(oop244);
courses.push(web222);
courses.push(dbs201);

console.log("Course objects in the array (courses):");
courses.forEach(function (e) {
    console.log('"' + e.code + ", " + e.name + ", " + e.hours + " hours/week, website: " + e.url + '"');
});


// Task 2
console.log("");
console.log("*** Task 2 ***");
console.log("");

student.student1 = {name: "John Smith", dob: "09/10/1999", sid: "010456101", program: "CPA", gpa: 4};
student.student2 = {name: "Jim Carrey", dob: "01/12/1992", sid: "012345678", program: "CPD", gpa: 3.5};
student.student3 = {name: "Justin Bieber", dob: "03/01/1994", sid: "0987654321", program: "CAN", gpa: 3};
student.student4 = {name: "Justin Trudeau", dob: "01/12/1992", sid: "123456789", program: "CAN", gpa: 4};

var students = [];
students.push(student.student1);
students.push(student.student2);
students.push(student.student3);
students.push(student.student4);

console.log("Student objects in the array (students):");
students.forEach(function (e) {
    console.log('Student info for ' + e.name + ': born on ' + e.dob + ', student id ' + e.sid + ', program ' + e.program + ', current GPA ' + e.gpa);
});