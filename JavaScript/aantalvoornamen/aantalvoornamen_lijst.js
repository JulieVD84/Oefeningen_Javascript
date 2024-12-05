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

                // Voorbeeld Met Lijst En ListItems    
                invoegenListItem(rijIndex, data);
                verwijderListItem(rijIndex + 1)

                nieuweRijToevoegen = false;
                break;
            }
            rijIndex++;
        }

        // Nieuw Object Toevoegen + Laatste Rij Toevoegn
        if (nieuweRijToevoegen) {

            // Nieuwe Data Toevogen
            arrayData.push({ voornaam: inputVoornaam, aantal: 0 });

            // Voorbeeld Met Lijst
            invoegenListItem(-1, { voornaam: inputVoornaam, aantal: 0 });
        }
    }



    // Invoegen ListItem
    function invoegenListItem(rij, data) {

        const lijst = document.getElementById("lijst");
        const listItem = document.createElement("li");
        listItem.innerText = data.voornaam + " : " + data.aantal;


        // -1 = Achteraan Toevoegen / Anders Toevoegen + Verwijderen Volgende Item
        if (rij === -1) {
            lijst.append(listItem);
        } else {
            lijst.insertBefore(listItem, lijst.children[rij])
        }
    }

    // Verwijder ListItem
    function verwijderListItem(deleteIndex) {

        const lijst = document.getElementById("lijst");
        const listItem = lijst.children[deleteIndex];
        lijst.removeChild(listItem);
    }

















}