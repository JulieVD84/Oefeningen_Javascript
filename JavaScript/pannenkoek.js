
"use strict";
for (const hyperlink of document.querySelectorAll("a[data-teverbergenid]")) {
    hyperlink.onclick = function () {
        const bijbehorendElement = document.getElementById
            (this.dataset.teverbergenid);
        if (this.innerText === "Verbergen") {
            bijbehorendElement.hidden = true;
            this.innerText = "Tonen";
        } else {
            bijbehorendElement.hidden = false;
            this.innerText = "Verbergen";
        }
    };
}