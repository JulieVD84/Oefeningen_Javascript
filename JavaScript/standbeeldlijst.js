document.getElementById("zonderOfMetAfbeeldingen").onclick = function () {


    for (const afbeelding of document.querySelectorAll("#standbeelden img")) {

        afbeelding.hidden = this.innerText === "Zonder afbeeldingen";
    }

    this.innerText = this.innerText === "Zonder afbeeldingen" ? "Met afbeeldingen" : "Zonder afbeeldingen";
}