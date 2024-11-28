"use strict";

// Variabelen
let artikelnaam = prompt("Geef artikelnaam");
let aankoopprijs = 0;
let verkoopprijs = 0;
let arr_artikels = [];

// Ingave Artikels
while (artikelnaam !== "stop") {

    aankoopprijs = Number(prompt("Geef aankoopprijs"));
    verkoopprijs = Number(prompt("Geef verkoopprijs"));

    arr_artikels.push({ naam: artikelnaam, aankoop: aankoopprijs, verkoop: verkoopprijs });

    artikelnaam = prompt("Geef artikelnaam");
}

// Zoekwoord
let zoekwoord = prompt("Geef zoekwoord");


// Oproepen functies
toon_alle_artikels(arr_artikels);
toon_woord_artikels(arr_artikels, zoekwoord);


// Toon Alle Artikels
function toon_alle_artikels(artikels) {

    return artikels.forEach(artikel => console.log(artikel.naam + artikel.aankoop + artikel.verkoop));
};

// Toon Woord Artikels
function toon_woord_artikels(artikels, woord) {

    return toon_alle_artikels(artikels.filter(artikel => artikel.naam.indexOf(woord) !== -1));
}


// Toon Vergelijk prijs Artikels
function toon_woord_artikels(artikels, woord) {

    return toon_alle_artikels(artikels.filter(artikel => artikel.naam.indexOf(woord) !== -1));
}








