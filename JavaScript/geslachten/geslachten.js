
// Hyperlinks click event => Doorgeven geslacht
for (const hyperlink of document.querySelectorAll('a')) {

    hyperlink.onclick = function () {
        toonGeslachten(`${this.dataset.selectie}`, './geslachten.json');
    }
}

// Async functie
async function toonGeslachten(filterGeslacht, url) {

    // Try Lezen JSON
    try {

        // Wacht Antwoord
        const response = await fetch(url);

        // Time Out
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Response Geconveert Naar JSON Object
        const jsonGeslachten = await response.json();

        // Tabel Linken + Initialiseren
        const tabelGeslachten = document.getElementById("tabelGeslachten");
        tabelGeslachten.innerHTML = "";

        // Filter JSON Array Indien Nodig
        const jsonFilterGeslachten = filterGeslacht === "alle" ? jsonGeslachten.filter(persoon => persoon) : jsonGeslachten.filter(persoon => persoon.geslacht === filterGeslacht)


        // Toevoegen Header Rij Aan Tabel
        const headerRij = document.createElement("tr");

        const headerElements = ["Voornaam", "Achternaam", "Geslacht", "Foto"];
        for (const element of headerElements) {
            const cell = document.createElement("th");
            cell.innerText = element;
            headerRij.appendChild(cell);
        }
        tabelGeslachten.appendChild(headerRij);



        // Itereer JSON Object
        for (let index = 0; index < jsonFilterGeslachten.length; index++) {

            // Eerst Cel
            const eersteCell = document.createElement("td");
            eersteCell.innerText = jsonFilterGeslachten[index].voornaam;


            // Tweede Cel
            const tweedeCell = document.createElement("td");
            tweedeCell.innerText = jsonFilterGeslachten[index].familienaam;


            // Image Voor Derde Cel
            const imageGeslacht = document.createElement("img");
            imageGeslacht.src = jsonFilterGeslachten[index].geslacht + ".png";

            // Derde Cel
            const derdeCell = document.createElement("td");
            derdeCell.appendChild(imageGeslacht);



            // Image Voor Vierde Cel
            const imageFoto = document.createElement("img");
            imageFoto.src = jsonFilterGeslachten[index].foto;

            // Vierde Cel
            const vierdeCell = document.createElement("td");
            vierdeCell.appendChild(imageFoto);


            // Aanmaken Rij + Toevoegen Cellen
            const nieuweRij = document.createElement("tr");
            nieuweRij.appendChild(eersteCell);
            nieuweRij.appendChild(tweedeCell);
            nieuweRij.appendChild(derdeCell);
            nieuweRij.appendChild(vierdeCell);


            // Rij Toevoegen Aan Tabel
            tabelGeslachten.appendChild(nieuweRij);
        }

    } catch (error) {
        console.error(error.message);
    }
}