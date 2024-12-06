
document.getElementById("submit").onclick = function () {

    for (const element of document.querySelectorAll("input:invalid")) {
        document.getElementById(`${element.id}Fout`).hidden = false;
    }
}