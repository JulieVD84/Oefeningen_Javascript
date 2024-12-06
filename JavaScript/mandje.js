
// Check Each List Item
for (const listitem of document.querySelectorAll("#beschikbaar li")) {

    // List Item Clicked
    listitem.onclick = function () {

        // Retrieve
        RetrieveData();

        // Add Or Remove    
        AddOrRemove(`${this.innerText}`)

        // StoreData
        StoreData();
    }
}

// Retrieve JSON Data
function RetrieveData() {
    const storageBurgers = localStorage.getItem("storeBurgers");
    arrBurgers = storageBurgers === null ? [] : JSON.parse(storageBurgers);
}


// Add Or Remove Burger
function AddOrRemove(burger) {

    // Check Burger Exists
    if (arrBurgers.indexOf(burger) !== -1) {
        arrBurgers = arrBurgers.filter(element => element !== burger);
    } else {
        arrBurgers.push(burger);
    }

    // Reset Burger List
    const lijst = document.getElementById("mandje")
    lijst.innerHTML = '';

    // Rewrite List From Array Burgers
    for (const element of arrBurgers) {

        const li = document.createElement("li");
        li.innerText = element;
        lijst.appendChild(li);
    }

    // Count Burgers
    document.getElementById("aantal").innerText = arrBurgers.length;
}


// Store JSON Data
function StoreData() {

    localStorage.setItem("storeBurgers", JSON.stringify(arrBurgers));
}







