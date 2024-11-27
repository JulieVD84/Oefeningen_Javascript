"use strict";
const landen = tikLanden();
if (landen.length !== 0) {
    const gemiddelde = berekenGemiddelde(landen);
    console.log("Gemiddelde:", gemiddelde);
    toonLandenOnderGemiddelde(landen, gemiddelde);
    toonLandenBovenGemiddelde(landen, gemiddelde);
}
function tikLanden() {
    const landen = [];
    let naam = prompt("Naam");
    while (naam !== "stop") {
        landen.push({ naam: naam, oppervlakte: Number(prompt("Oppervlakte")) });
        naam = prompt("Naam");
    }
    return landen;
}
function berekenGemiddelde(landen) {
    return landen.map(land => land.oppervlakte)
        .reduce((totaal, oppervlakte) => totaal + oppervlakte) / landen.length;
}
function toonLandenOnderGemiddelde(landen, gemiddelde) {
    console.log("Onder gemiddelde:");
    landen.filter(land => land.oppervlakte < gemiddelde)
        .forEach(land => console.log(land.naam, land.oppervlakte));
}
function toonLandenBovenGemiddelde(landen, gemiddelde) {
    console.log("Boven gemiddelde:");
    landen.filter(land => land.oppervlakte > gemiddelde)
        .forEach(land => console.log(land.naam, land.oppervlakte));
} 