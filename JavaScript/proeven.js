
const lijst = document.getElementById("burgers");

for (const ham of lijst) {

    ham.onclick = function () {
        lijst.remove(lijst.selectedIndex);
    }
}