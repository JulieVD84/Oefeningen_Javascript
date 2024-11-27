"use strict";

let arr_land_oppervlakte = [];

let land = prompt("land");


while (land !== "stop") {

    let oppervlakte = Number(prompt("oppervlakte"));

    land = prompt("land");

    arr_land_oppervlakte.push({ land, oppervlakte });
}





const som_oppervlakten = arr_land_oppervlakte.reduce((land, land2) => land.oppervlakte + land2.oppervlakte);


console.log(som_oppervlakten);



const gemiddelde = som_oppervlakten / arr_land_oppervlakte.length;
console.log(gemiddelde);


const kleine_landen = arr_land_oppervlakte.filter(land => land.oppervlakte < gemiddelde)



console.log("kleine landen");
kleine_landen.forEach(land => console.log(land.land + " : " + land.oppervlakte))
