const characterURL = "https://rickandmortyapi.com/api/character/";
const body = document.querySelector("body");

const displayErrorInDom = (errorStr) => {
    const errorMsg = document.createElement("h1");
    errorMsg.innerText = errorStr;
    body.appendChild(errorMsg);
}

// number of characters is 1 to 826
const rickAndMortyCharacters = async () => {
    const randomNumber = Math.ceil(Math.random() * 826);
    const data = await fetch(characterURL + randomNumber);
    // Wenn der status Text !== OK ist, dann zeige was anderes im DOM. 
    if(data.statusText !== "OK"){
        const errorStr = `Error: The Database was compromised. No data under the code ${randomNumber}`
        console.log(errorStr);
        displayErrorInDom(errorStr);
    }
    const character = await data.json();
    console.log(character)
    console.log(character.image);

}

rickAndMortyCharacters();



const getCharacterByName = async (name) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const character = await data.json();
    console.log(character);
}

getCharacterByName("rick");