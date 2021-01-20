window.onload = function () {

    var subtitle = document.querySelector("#subtitle");
    var outputTable = document.querySelector("#outputTable");
    var menu_21 = document.querySelector("#menu_21");
    var menu_22 = document.querySelector("#menu_22");
    var menu_31 = document.querySelector("#menu_31");
    var menu_32 = document.querySelector("#menu_32");
    var menu_41 = document.querySelector("#menu_41");
    var menu_42 = document.querySelector("#menu_42");

    subtitle.innerHTML = "<h4>List of Countries and Dependencies</h4>"
    var tbody = document.createElement("tbody");

    for (var i = 0; i < countries.length; i++) {
        var tr = document.createElement("tr");
        tr.appendChild(makeFlag(countries[i].Code));
        tr.appendChild(makeTD(countries[i].Code));
        tr.appendChild(makeTD(countries[i].Name.English));
        tr.appendChild(makeTD(countries[i].Continent));
        tr.appendChild(makeTD(countries[i].AreaInKm2));
        tr.appendChild(makeTD(countries[i].Population));
        tr.appendChild(makeTD(countries[i].Capital));
        tbody.appendChild(tr);
    }
    outputTable.appendChild(tbody);


    function makeTD(t) {
        var td = document.createElement("td");
        var txt = document.createTextNode(t);
        td.appendChild(txt);
        return td;
    }

    function makeFlag(t) {
        var td = document.createElement("td");
        var img = document.createElement("img");
        img.src = 'flags/' + t.toLowerCase() + '.png';
        img.width = 40;
        img.height = 25;
        td.appendChild(img);
        return td;
    }

    // MENUS

    menu_21.onclick = function () {
        tbody.innerHTML = "";
        subtitle.innerHTML = "<h4>List of Countries and Dependencies - Population Greater than 100 Million</h4>"
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].Population > 100000000) {
                var tr = document.createElement("tr");
                tr.appendChild(makeFlag(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Name.English));
                tr.appendChild(makeTD(countries[i].Continent));
                tr.appendChild(makeTD(countries[i].AreaInKm2));
                tr.appendChild(makeTD(countries[i].Population));
                tr.appendChild(makeTD(countries[i].Capital));
                tbody.appendChild(tr);
            }
        }
        outputTable.appendChild(tbody);
    }
    menu_22.onclick = function () {
        tbody.innerHTML = "";
        subtitle.innerHTML = "<h4>List of Countries and Dependencies - Population between 1 and 2 million</h4>"
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].Population > 1000000 && countries[i].Population < 2000000) {
                var tr = document.createElement("tr");
                tr.appendChild(makeFlag(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Name.English));
                tr.appendChild(makeTD(countries[i].Continent));
                tr.appendChild(makeTD(countries[i].AreaInKm2));
                tr.appendChild(makeTD(countries[i].Population));
                tr.appendChild(makeTD(countries[i].Capital));
                tbody.appendChild(tr);
            }
        }
        outputTable.appendChild(tbody);
    }
    menu_31.onclick = function () {
        tbody.innerHTML = "";
        subtitle.innerHTML = "<h4>List of Countries and Dependencies - Area greater than 1 million Km2, Americas</h4>"
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas") {
                var tr = document.createElement("tr");
                tr.appendChild(makeFlag(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Name.English));
                tr.appendChild(makeTD(countries[i].Continent));
                tr.appendChild(makeTD(countries[i].AreaInKm2));
                tr.appendChild(makeTD(countries[i].Population));
                tr.appendChild(makeTD(countries[i].Capital));
                tbody.appendChild(tr);
            }
        }
        outputTable.appendChild(tbody);
    }
    menu_32.onclick = function () {
        tbody.innerHTML = "";
        subtitle.innerHTML = "<h4>List of Countries and Dependencies - All countries in Asia</h4>"
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].Continent == "Asia") {
                var tr = document.createElement("tr");
                tr.appendChild(makeFlag(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Code));
                tr.appendChild(makeTD(countries[i].Name.English));
                tr.appendChild(makeTD(countries[i].Continent));
                tr.appendChild(makeTD(countries[i].AreaInKm2));
                tr.appendChild(makeTD(countries[i].Population));
                tr.appendChild(makeTD(countries[i].Capital));
                tbody.appendChild(tr);
            }
        }
        outputTable.appendChild(tbody);
    }
    menu_41.onclick = function () {
        tbody.innerHTML = "";
        subtitle.innerHTML = "<h4>List of Countries and Dependencies - Country / Dep. Name in English</h4>"
        for (var i = 0; i < countries.length; i++) {
            var tr = document.createElement("tr");
            tr.appendChild(makeFlag(countries[i].Code));
            tr.appendChild(makeTD(countries[i].Code));
            tr.appendChild(makeTD(countries[i].Name.English));
            tr.appendChild(makeTD(countries[i].Continent));
            tr.appendChild(makeTD(countries[i].AreaInKm2));
            tr.appendChild(makeTD(countries[i].Population));
            tr.appendChild(makeTD(countries[i].Capital));
            tbody.appendChild(tr);
        }
        outputTable.appendChild(tbody);
    }
    menu_42.onclick = function () {
        tbody.innerHTML = "";
        subtitle.innerHTML = "<h4>List of Countries and Dependencies - Country / Dep. Name in Arabic</h4>"
        for (var i = 0; i < countries.length; i++) {
            var tr = document.createElement("tr");
            tr.appendChild(makeFlag(countries[i].Code));
            tr.appendChild(makeTD(countries[i].Code));
            tr.appendChild(makeTD(countries[i].Name.Arabic));
            tr.appendChild(makeTD(countries[i].Continent));
            tr.appendChild(makeTD(countries[i].AreaInKm2));
            tr.appendChild(makeTD(countries[i].Population));
            tr.appendChild(makeTD(countries[i].Capital));
            tbody.appendChild(tr);
        }
        outputTable.appendChild(tbody);
    }
}