// Data for the "HTML Audio" Page

var audio = {
    controls: true,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {
    var aud = document.querySelector("#aud")

    aud.innerHTML += "<audio controls=" + '"' + audio.controls + '"' + ">"

        + "<source src=" + '"' + audio.source[0].src + '"' + " type=" + '"' + audio.source[0].type + '"' + "/>"
        + "<source src=" + '"' + audio.source[1].src + '"' + " type=" + '"' + audio.source[1].type + '"' + "/>"

        + "</audio>"
}