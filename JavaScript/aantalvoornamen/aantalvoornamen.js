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

                tabelNamen.deleteRow(rijIndex);
                data.aantal++;

                insertRow(rijIndex, data)

                nieuweRijToevoegen = false;
                break;
            }
            rijIndex++;
        }

        // Nieuw Object Toevoegen + Laatste Rij Toevoegn
        if (nieuweRijToevoegen) {

            arrayData.push({ voornaam: inputVoornaam, aantal: 0 });
            insertRow(arrayData.length - 1, arrayData[arrayData.length - 1])
        }
    }

    // InsertRow
    function insertRow(rij, data) {

        const insertRow = tabelNamen.insertRow(rij);
        const insertCell = insertRow.insertCell();
        insertCell.innerText = data.voornaam + " : " + data.aantal;
    }
}