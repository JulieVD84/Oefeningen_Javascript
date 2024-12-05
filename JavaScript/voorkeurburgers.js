"use strict";

// Link lijsten
const linksSelect = document.getElementById("links");
const rechtsSelect = document.getElementById("rechts");

// Link buttons
const eenNaarRechtsButton = document.getElementById("eenNaarRechts");
const allesNaarRechtsButton = document.getElementById("allesNaarRechts");
const eenNaarLinksButton = document.getElementById("eenNaarLinks");
const allesNaarLinksButton = document.getElementById("allesNaarLinks");


allesNaarRechtsButton.onclick = function () {
    for (const linksOption of linksSelect.options) {
        const rechtsOption = document.createElement("option");
        rechtsOption.innerText = linksOption.innerText;
        rechtsSelect.appendChild(rechtsOption);
    }
    linksSelect.options.length = 0;
    this.disabled = true;
    allesNaarLinksButton.disabled = false;
};