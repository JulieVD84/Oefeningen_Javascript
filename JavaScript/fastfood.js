"use strict";
const aantalHamburgers = document.getElementById("hamburgers").length;
document.getElementById("aantalHamburgers").innerText = aantalHamburgers;

const aantalFrieten = document.getElementsByName("friet").length;
document.getElementById("aantalFrieten").innerText = aantalFrieten;

const aantalDesserts = document.getElementsByName("dessert").length;
document.getElementById("aantalDesserts").innerText = aantalDesserts;

document.getElementById("hamburgers").onchange = function () {
    document.getElementById("keuzeBurger").innerText = this.value;
};

for (const inputFriet of document.getElementsByName("friet")) {
    inputFriet.onchange = function () {
        document.getElementById("keuzeFriet").innerText = this.value;
    };
}



/* for (const inputDessert of document.getElementsByName("dessert")) {
    inputDessert.onchange = function () {
        let keuzes = "";
        for (const eenInputDessert of document.getElementsByName("dessert")) {
            if (eenInputDessert.checked) {
                keuzes += `${eenInputDessert.parentElement.innerText},`;
            }
        }
        document.getElementById("keuzeDessert").innerText = keuzes.slice(0, -1);
    };
} */


for (const inputDessert of document.getElementsByName("dessert")) {
    inputDessert.onchange = function () {
        let keuzes = "";
        for (const eenInputDessert of document.getElementsByName("dessert")) {
            if (eenInputDessert.checked) {
                keuzes += `${eenInputDessert.value}:
                ${eenInputDessert.parentElement.innerText},`;
            }
        }
        document.getElementById("keuzeDessert").innerText = keuzes.slice(0, -1);
    };
} 