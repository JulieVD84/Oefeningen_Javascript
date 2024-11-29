
const begroeting_text = document.getElementById("begroeting");

const vandaag = new Date();

console.log(vandaag.getHours());

if (vandaag.getHours() < 12) {

    begroeting_text.innerText = "Goedemorgen";

} else {

    if (vandaag.getHours() < 18) {

        begroeting_text.innerText = "Goedemiddag";

    } else {

        begroeting_text.innerText = "Goedeavond";
    }
}