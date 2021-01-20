function sideBarMessage(mess) {
    document.getElementById("side").innerHTML = mess;
}

function psswd() {
    var psswd = document.getElementById("psswd").value.trim();
    if (psswd.length !== 6) {
        sideBarMessage("password length must be 6 chars");
        return false;
    }
    if (!psswd.math(/^[A-Za-z]/)) {
        sideBarMessage("password must start with a char");
        return false;
    }
    if (!psswd.match(/[A-Z]+[0-9]+/)) {
        sideBarMessage("password must contain char and int");
        return false;
    }
    return true;
}

function uname() {
    var username = document.getElementById("username").value.trim();
    if (username.length < 6) {
        sideBarMessage("username must be longer than 6 chars");
        return false;
    }
    if (!username.match(/^[A-Za-z]/)) {
        sideBarMessage("username must start with char");
        return false;
    }
    return true;
}

function validate() {
    var p = psswd();
    var u = uname();
    if (!p || !u) {
        return false;
    } else {
        sideBarMessage("Submitted!");
        return true;
    }
}
