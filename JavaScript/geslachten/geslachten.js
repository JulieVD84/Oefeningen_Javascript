// Inlezen JSON file
geslachten();

// Async functie
async function geslachten() {
    const url = './geslachten.json';
    try {

        // Wacht Antwoord
        const response = await fetch(url);

        // Time Out
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // Response Geconveert Naar JSON Object
        const jsonGeslachten = await response.json();

        // Tabel
        const tabelGeslachten = document.getElementById("tabelGeslachten");


        // Itereer JSON Object
        for (let index = 0; index < jsonGeslachten.length; index++) {

            // Eerst Cel
            const eersteCell = document.createElement("td");
            eersteCell.innerText = jsonGeslachten[index].voornaam;


            // Tweede Cel
            const tweedeCell = document.createElement("td");
            tweedeCell.innerText = jsonGeslachten[index].familienaam;


            // Image Voor Derde Cel
            const imageGeslacht = document.createElement("img");
            imageGeslacht.src = jsonGeslachten[index].geslacht + ".png";

            // Derde Cel
            const derdeCell = document.createElement("td");
            derdeCell.appendChild(imageGeslacht);



            // Image Voor Vierde Cel
            const imageFoto = document.createElement("img");
            imageFoto.src = jsonGeslachten[index].foto;

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