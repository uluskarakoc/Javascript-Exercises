const characterURL = "https://rickandmortyapi.com/api/character/";
const body = document.querySelector("body");

const displayErrorInDom = (errorStr) => {
    const errorMsg = document.createElement("h1");
    errorMsg.innerText = errorStr;
    body.appendChild(errorMsg);
}

const renderCharacter = (characterObj) => {
    const imageEl = document.createElement("img");
    imageEl.src = characterObj.image;
    body.appendChild(imageEl);

    const nameEl = document.createElement("h1");
    nameEl.innerText = characterObj.name;
    body.appendChild(nameEl);
}

// number of characters is 1 to 826
const rickAndMortyCharacters = async () => {
    const randomNumber = Math.ceil(Math.random() * 826);
    const data = await fetch(characterURL + randomNumber);
    // Wenn der status Text !== OK ist, dann zeige was anderes im DOM. 
    if(!data.ok){
        const errorStr = `Error: The Database was compromised. No data under the code ${randomNumber}`
        console.log(errorStr);
        displayErrorInDom(errorStr);
    }
    const character = await data.json();
    renderCharacter(character);
    console.log(character);
}

rickAndMortyCharacters();



const getCharacterByName = async (name) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const character = await data.json();
    console.log(character);     // bu code blogu neden burada?
}

getCharacterByName("rick");