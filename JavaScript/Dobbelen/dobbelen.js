
// Variabelen
let Score = 0
let TotaleScore = 0

// Onclick event
document.getElementById("button_werp").onclick = function () {

    // Bereken werpen
    let Eerste_Worp = Math.floor((Math.random() * 6) + 1);
    let Tweede_Worp = Math.floor((Math.random() * 6) + 1);

    // Toon dobbelstenen
    Toon_Dobbelsteen("dobbelsteen1", Eerste_Worp);
    Toon_Dobbelsteen("dobbelsteen2", Tweede_Worp);

    // Bereken Scores
    Score = Eerste_Worp == Tweede_Worp ? 2 * (Eerste_Worp + Tweede_Worp) : Eerste_Worp + Tweede_Worp;
    TotaleScore += Score;

    // Toon Scores
    document.getElementById("score").innerText = "Score: " + Score;
    document.getElementById("totale_score").innerText = "Totale Score: " + TotaleScore;

    // Toon dobbelsteen
    function Toon_Dobbelsteen(dobbel_id, resultaat) {
        document.getElementById(dobbel_id).src = 'steen' + resultaat + ".svg";
    }

}