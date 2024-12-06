document.getElementById("submit").onclick = function () {


    const getal1 = document.getElementById("getal1");
    const getal1Fout = document.getElementById("getal1Fout");

    getal1Fout.hidden = !(getal1.value < 0 || isNaN(getal1.value))

}