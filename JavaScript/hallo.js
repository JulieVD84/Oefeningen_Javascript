"use strict";
const voornaam = sessionStorage.getItem("voornaam");

console.log("Voornaam : " + voornaam);

if (voornaam !== null) {
    document.getElementById("voornaam").innerText = voornaam;
} 