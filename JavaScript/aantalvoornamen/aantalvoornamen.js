const arrayData = [];



document.getElementById("buttonToevoegen").onclick = function () {


    const lijst = document.querySelector("#bodyTabel");

    // const row = lijst.insertRow();
    // const cel1 = row.insertCell();
    // cel1.innerText = "Test";

    // const cel2 = row.insertCell();
    // cel2.innerText = "Test2";


    // let data = { voornaam: "A", aantal: 1 };
    // let data2 = { voornaam: "B", aantal: 2 };


    // arrayData.push(data);
    // arrayData.push(data2);


    const inputVoornaam = document.getElementById("inputVoornaam").value;




    let nieuweRijToevoegen = true;
    let rijIndex = 0;

    for (const data of arrayData) {

        console.log("data: " + data.voornaam);

        if (inputVoornaam === data.voornaam) {

            console.log("gelijk: " + data.voornaam);

            lijst.deleteRow(rijIndex);
            data.aantal++;

            insertRow(rijIndex, data)

            nieuweRijToevoegen = false;
            break;
        }

        rijIndex++;
    }




    if (nieuweRijToevoegen) {

        arrayData.push({ voornaam: inputVoornaam, aantal: 0 });
        insertRow(arrayData.length - 1, arrayData[arrayData.length - 1])
    }


    // InsertRow
    function insertRow(rij, data) {


        console.log("rij" + rij)

        const insertRow = lijst.insertRow(rij);
        const insertCell = insertRow.insertCell();
        insertCell.innerText = data.voornaam + ":" + data.aantal;
    }






    for (const data of arrayData) {

        console.log("Check Names" + data.voornaam);

    }


}