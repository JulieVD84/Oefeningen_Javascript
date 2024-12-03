// Check Alle Afbeeldingen
for (const selectedImage of document.querySelectorAll("img.selecteer")) {

    // Afbeelding Event
    selectedImage.onclick = function () {

        // Variabelen
        let gewonnen = false;
        let gelijkSpel = false;

        // Bereken Keuze
        // 1 = Blad
        // 2 = Steen
        // 3 = Schaar
        let keuze = Math.floor((Math.random() * 3) + 1);

        // Keuzemogelijkheden
        switch (this.id) {

            // Gebruiker Blad
            case "blad":
                if (keuze === 1) {
                    gelijkSpel = true;
                }
                if (keuze === 2) {
                    gewonnen = true;
                }
                break;

            // Gebruiker Steen
            case "steen":
                if (keuze === 2) {
                    gelijkSpel = true;
                }
                if (keuze === 3) {
                    gewonnen = true;
                }
                break;

            // Gebruiker Schaar
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
        const computerKeuze = document.getElementById("keuze");

        switch (keuze) {
            case 1:
                computerKeuze.src = "blad.png"
                break;
            case 2:
                computerKeuze.src = "steen.png"
                break;
            case 3:
                computerKeuze.src = "schaar.png"
                break;
        }
        document.getElementById("keuze").hidden = false;

        // Toon Winnaar
        if (gelijkSpel) {
            document.getElementById("resultaat").innerText = "Winnaar : Gelijkspel";
        } else {
            if (gewonnen) {
                document.getElementById("resultaat").innerText = "Winnaar : Gebruiker";
            } else {
                document.getElementById("resultaat").innerText = "Winnaar : Computer";
            }
        }
    }
}