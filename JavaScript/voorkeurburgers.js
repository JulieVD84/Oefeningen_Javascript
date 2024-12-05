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




function verplaatsAlleBurgersVanNaar(vanSelect, naarSelect) {
    for (const vanOption of vanSelect.options) {
        // option maken in de select naarwaar je de options kopieert:
        const naarOption = document.createElement("option");
        naarOption.innerText = vanOption.innerText;
        naarSelect.appendChild(naarOption);
    }
    // de options verwijderen in de select vanwaar je de options kopieerde
    vanSelect.options.length = 0;
}
allesNaarRechtsButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(linksSelect, rechtsSelect);
    this.disabled = true;
    allesNaarLinksButton.disabled = false;
};
allesNaarLinksButton.onclick = function () {
    verplaatsAlleBurgersVanNaar(rechtsSelect, linksSelect);
    this.disabled = true;
    allesNaarRechtsButton.disabled = false;
};



eenNaarRechtsButton.onclick = function () {
    const gekozenBurger = linksSelect.value;
    const option = document.createElement("option");
    option.innerText = gekozenBurger;
    rechtsSelect.appendChild(option);
    linksSelect.remove(linksSelect.selectedIndex);
    this.disabled = true;
    if (linksSelect.length === 0) {
        allesNaarRechtsButton.disabled = true;
    }
    allesNaarLinksButton.disabled = false;
};



function verplaatsEenBurgerVanNaar(vanSelect, naarSelect) {
    const naam = vanSelect.value;
    const option = document.createElement("option");
    option.innerText = naam;
    naarSelect.appendChild(option);
    vanSelect.remove(vanSelect.selectedIndex);
}
eenNaarRechtsButton.onclick = function () {
    verplaatsEenBurgerVanNaar(linksSelect, rechtsSelect);
    this.disabled = true;
    if (linksSelect.length === 0) {
        allesNaarRechtsButton.disabled = true;
    }
    allesNaarLinksButton.disabled = false;
};
eenNaarLinksButton.onclick = function () {
    verplaatsEenBurgerVanNaar(rechtsSelect, linksSelect);
    this.disabled = true;
    if (rechtsSelect.length === 0) {
        allesNaarLinksButton.disabled = true;
    }
    allesNaarRechtsButton.disabled = false;
};


