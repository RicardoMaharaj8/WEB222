// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function () {
    var r = [
        document.querySelector("#JSr1"),
        document.querySelector("#JSr2"),
        document.querySelector("#JSr3"),
        document.querySelector("#JSr4"),
        document.querySelector("#JSr5")
    ]

    for (var i = 0; i < this.users.length; i++) {
        r[i].innerHTML += "<td>" + users[i].first_name + "</td>"
        r[i].innerHTML += "<td>" + users[i].last_name + "</td>"
        r[i].innerHTML += "<td>" + users[i].age + "</td>"
        r[i].innerHTML += "<td>" + users[i].email + "</td>"
    }
}