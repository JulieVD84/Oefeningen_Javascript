// Data Array
const arrayData = [];

// Click Event
document.getElementById("buttonToevoegen").onclick = function () {

    // Tabel / Input
    const tabelNamen = document.querySelector("#bodyTabel");
    const inputVoornaam = document.getElementById("inputVoornaam").value;

    let nieuweRijToevoegen = true;
    let rijIndex = 0;

    // Controleer Lengte Naam
    if (inputVoornaam.length > 0) {

        // Check Alle Objecten
        for (const data of arrayData) {

            // Replace row
            if (inputVoornaam === data.voornaam) {

                // Verhoog Data
                data.aantal++;

                // Voorbeeld Met Tabel
                tabelNamen.deleteRow(rijIndex);
                invoegenRij(rijIndex, data)

                nieuweRijToevoegen = false;
                break;
            }
            rijIndex++;
        }

        // Nieuw Object Toevoegen + Laatste Rij Toevoegn
        if (nieuweRijToevoegen) {

            // Nieuwe Data Toevogen
            arrayData.push({ voornaam: inputVoornaam, aantal: 0 });

            // Voorbeeld Met Tabel
            invoegenRij(arrayData.length - 1, arrayData[arrayData.length - 1])

        }
    }


    // TABEL : Invoegen Rij
    function invoegenRij(rij, data) {

        const insertRow = tabelNamen.insertRow(rij);
        const insertCell = insertRow.insertCell();
        insertCell.innerText = data.voornaam + " : " + data.aantal;
    }
}