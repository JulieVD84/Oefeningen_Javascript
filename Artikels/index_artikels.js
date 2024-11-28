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

// Toon Alle Artikels
toon_artikel_gegevens(arr_artikels);

// Zoekwoord
let zoekwoord = prompt("Geef zoekwoord");

// Toon Artikels Met Woord
toon_woord_artikels(arr_artikels, zoekwoord);


// Ondergrens / Bovengrens verkoopprijs
let ondergrens_verkoopprijs = Number(prompt("Geef ondergrens verkoopprijs"));
let bovengrens_verkoopprijs = Number(prompt("Geef bovengrens verkoopprijs"));

if (bovengrens_verkoopprijs <= ondergrens_verkoopprijs) {
    console.log("Incorrecte onder- en bovengrens");
} else {
    toon_grenswaarde_verkoopprijs_artikels(arr_artikels, ondergrens_verkoopprijs, bovengrens_verkoopprijs);
}


// Toon Gemiddelde Verkoopprijs
console.log("Gemiddelde verkoopprijs: ", toon_gemiddelde_verkoopprijs_artikels(arr_artikels));



// Toon Alle Artikels
function toon_artikel_gegevens(artikels) {

    console.log("Overzicht alle artikels");
    return artikels.forEach(artikel => console.log("Naam: " + artikel.naam + "\n" + "Aankoopprijs: " + artikel.aankoop + "\n" + "Verkoopprijs: " + artikel.verkoop));
};

// Toon Woord Artikels
function toon_woord_artikels(artikels, woord) {

    console.log("Overzicht artikels met gevonden zoekwoord: " + woord);
    return artikels.filter(artikel => artikel.naam.indexOf(woord) !== -1).forEach(artikel => console.log("Naam: " + artikel.naam + "\n"));
}


// Toon Verkoopprijs Artikels
function toon_grenswaarde_verkoopprijs_artikels(artikels, verkoopprijs_ondergrens, verkoopprijs_bovengrens) {

    console.log("Overzicht artikels binnen grenswaarden " + verkoopprijs_ondergrens + " en " + verkoopprijs_bovengrens);
    return artikels.filter(artikel => artikel.verkoop >= verkoopprijs_ondergrens && artikel.verkoop <= verkoopprijs_bovengrens).forEach(artikel => console.log("Naam: " + artikel.naam + "\n" + "Verkoopprijs: " + artikel.verkoop));
}


// Toon Gemiddelde Artikels
function toon_gemiddelde_verkoopprijs_artikels(artikels) {

    let som_artikels = artikels.reduce((artikel, artikel2) => artikel + artikel2.verkoop, 0);
    return (som_artikels / artikels.length);
}


