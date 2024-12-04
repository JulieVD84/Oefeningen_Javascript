
for (const ingredient of document.querySelectorAll("#ingrediënten li , #werkwijze li")) {

    ingredient.onclick = function () {

        if (ingredient.classList.contains("opvallend")) {
            ingredient.classList.remove('opvallend');
        } else {
            ingredient.classList.add('opvallend');
        }
    }
}
