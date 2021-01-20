// Data for the "HTML Lists" Page

var fruits = ["Apples", "Oranges", "Pears", "Grapes", "Pineapples", "Mangos"];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {
        type: "directory",
        name: "HTML Files",
        files: [{type: "file", name: "file1.html"}, {type: "file", name: "file2.html"}]
    },
    {type: "file", name: "file3.txt"},
    {
        type: "directory",
        name: "JavaScript Files",
        files: [{type: "file", name: "file1.js"}, {type: "file", name: "file2.js"}, {type: "file", name: "file3.js"}]
    }
];

window.onload = function () {
    var con = document.querySelector("#Flist");

    for (var i = 0; i < fruits.length; i++) {
        con.innerHTML += "<li>" + fruits[i] + "</li>";
    }

    var l2 = document.querySelector("#dlist");

    for (i = 0; i < directory.length; i++) {
        if (directory[i].type == "file") {
            l2.innerHTML += "<li>" + directory[i].name + "</li>"
        } else if (directory[i].type == "directory") {
            l2.innerHTML += "<li>" + directory[i].name + "</li>";
            for (var n = 0; n < directory[i].files.length; n++) {
                l2.innerHTML += "<li>" + directory[i].files[n].name + "</li>";
            }
        }
    }
};