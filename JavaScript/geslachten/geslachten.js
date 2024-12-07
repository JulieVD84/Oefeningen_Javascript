
getData();

async function getData() {
    const url = './geslachten.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);


        for (let index = 0; index < json.length; index++) {

            console.log(json[index]);
            console.log(json[index].voornaam);
            console.log(json[index].familienaam);
        }


    } catch (error) {
        console.error(error.message);
    }
}