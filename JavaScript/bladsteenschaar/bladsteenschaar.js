// Check Alle Afbeeldingen
for (const selectedImage of document.querySelectorAll("img.selecteer")) {

    // Afbeelding Event
    selectedImage.onclick = function () {

        // Variabelen
        let gewonnen = false;
        let gelijkSpel = false;

        // Bereken Keuze
        // 1 = Blad 2 = Steen 3 = Schaar
        let keuze = Math.floor((Math.random() * 3) + 1);

        // Keuzemogelijkheden
        switch (this.id) {

            case "blad":
                if (keuze === 1) {
                    gelijkSpel = true;
                }
                if (keuze === 2) {
                    gewonnen = true;
                }
                break;

            case "steen":
                if (keuze === 2) {
                    gelijkSpel = true;
                }
                if (keuze === 3) {
                    gewonnen = true;
                }
                break;

            case "schaar":
                if (keuze === 3) {
                    gelijkSpel = true;
                }
                if (keuze === 1) {
                    gewonnen = true;
                }
                break;
        }

        // Toon Computerkeuze
        switch (keuze) {
            case 1:
                document.getElementById("keuze").src = "blad.png"
                break;
            case 2:
                document.getElementById("keuze").src = "steen.png"
                break;
            case 3:
                document.getElementById("keuze").src = "schaar.png"
                break;
        }
        document.getElementById("keuze").hidden = false;

        // Toon Winnaar
        document.getElementById("resultaat").innerText = gelijkSpel === true ? "Winnaar : Gelijkspel" : gewonnen === true ? "Winnaar : Gebruiker" : "Winnaar : Computer";
    }
}