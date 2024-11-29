
// Geen () na onclick = event
// Anonymous function
// Voor inputtext verwijzen naar "value"


// Voorbeeld onclick
// document.getElementById("button_spaties").onclick = function () {

// Voorbeeld oninput
document.getElementById("input_text").oninput = function () {

    const zin = document.getElementById("input_text").value;

    let aantal_spaties = 0;
    let aantal_klinkers = 0;

    for (const element of zin) {

        if (element === " ") {

            aantal_spaties++;
        }

        switch (element) {
            case "a":
            case "e":
                aantal_klinkers++;
                break;

            default:
                break;
        }
    }

    document.getElementById("output_text").value = "Spaties = " + aantal_spaties + " Klinkers = " + aantal_klinkers;
};


