
// Function Toon Verplicht
function Toon_Verplicht() {

    // Logging ID
    console.log("verplicht " + `${this.id}`);

    // Logging Leeg
    if (`${this.value}` == '') {
        console.log("leeg");
    } else {
        console.log("ingevuld");
    }

    // Tonen Veld Verplicht
    document.getElementById("fout").hidden = `${this.value}` !== '';
}

// Define Collection
const inputs = document.getElementsByTagName("input");

// Ierate List => onblur
for (i of inputs) {
    i.onblur = Toon_Foutmelding;
}

