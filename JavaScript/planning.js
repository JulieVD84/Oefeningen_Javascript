"use strict";
const tbody = document.querySelector("tbody");
let datum = new Date();
for (let teller = 1; teller <= 10; teller++) {
    datum.setDate(datum.getDate() + 1);
    const tr = tbody.insertRow();
    const tdDatum = tr.insertCell();
    tdDatum.innerText = datum.toLocaleDateString("nl-BE");
    const tdTODO = tr.insertCell();
    tdTODO.appendChild(document.createElement("input"));
} 