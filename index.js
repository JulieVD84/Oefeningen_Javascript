"use strict";

let arr_land_oppervlakte = [];
let land = prompt("land_");


while (land !== "stop") {

    let oppervlakte = Number(prompt("oppervlakte"));

    arr_land_oppervlakte.push({ land, oppervlakte });

    land = prompt("land_");
}


// Tonen oppervlaktes
arr_land_oppervlakte.forEach(land => console.log(land.oppervlakte + land.land));



// Eerste functie met map
//const som_oppervlakten = arr_land_oppervlakte.map(land => land.oppervlakte).reduce((acc, current) => acc + current);

// Tweede functie => direct reduce functie gebruiken
const gemiddelde = arr_land_oppervlakte.reduce((acc, current) => acc + current.oppervlakte, 0) / arr_land_oppervlakte.length;

// Gemiddelde
console.log("gemiddelde :", gemiddelde);

// Kleine landen
console.log("kleine landen :");
arr_land_oppervlakte.filter(land => land.oppervlakte < gemiddelde).forEach(land => console.log(land.land + " : " + land.oppervlakte))

// Grote landen
console.log("grote landen :");
arr_land_oppervlakte.filter(land => land.oppervlakte > gemiddelde).forEach(land => console.log(land.land + " : " + land.oppervlakte))
