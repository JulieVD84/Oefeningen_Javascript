"use strict";

// Prompt Naam
let naam = prompt("Geef naam");

// Array personen
let arr_personen = [];


// Belangrijk vergeet niet 'let' te gebruiken
// Init lengte
let lengte = 0;

while (naam !== "stop") {

    // Prompt Lengte
    lengte = Number(prompt("Lengte"));

    // Add Elements To Array
    arr_personen.push({ naam, lengte });

    // Prompt Naam
    naam = prompt("Geef naam");

    // Functie Test
    console.log(toonNamen(naam));
}

// Toon Personen
arr_personen.forEach(persoon => console.log(persoon.naam + persoon.lengte));


// Functie Test
function toonNamen(toonNaam) {

    return "Ingegeven naam :" + toonNaam;
}


// Belangrijk => eerste param moet gewoon 'a' blijven => niet a.lengte + geinitialiseerd op lengte
let kleinste_lengte = arr_personen.reduce((a, b) => Math.min(a, b.lengte), lengte);
let grootste_lengte = arr_personen.reduce((a, b) => Math.max(a, b.lengte), lengte);

// Logging lengtes
console.log("kleinste lengte:", kleinste_lengte);
console.log("grootste lengte:", grootste_lengte);


// Kleinste lengte
console.log("kleinste persoon:");
arr_personen.filter(a => a.lengte == kleinste_lengte).forEach(a => console.log(a.naam + ":" + a.lengte));

// Grootste lengte
console.log("grootste persoon:");
arr_personen.filter(a => a.lengte == grootste_lengte).forEach(a => console.log(a.naam + ":" + a.lengte));

