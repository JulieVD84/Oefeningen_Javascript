

for (const link of document.querySelectorAll("#landen a")) {

    link.onclick = function () {

        document.getElementById("oppervlakte").innerText = this.dataset.oppervlakte;
        document.getElementById("hoofdstad").innerText = this.dataset.hoofdstad;
    }
}

