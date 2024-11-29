document.getElementById("herhaal").onblur = function () {
    const herhaalFeedbackSpan = document.getElementById("herhaalFeedback");
    herhaalFeedbackSpan.innerText =
        this.value === document.getElementById("paswoord").value ?
            "OK" :
            "Verschilt van paswoord";
};