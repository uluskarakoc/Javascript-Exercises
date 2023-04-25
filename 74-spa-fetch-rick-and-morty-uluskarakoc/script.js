const characterURL = "https://rickandmortyapi.com/api/character/";

// number of characters is 1 to 826
const rickAndMortyCharacters = async () => {
    const randomNumber = Math.ceil(Math.random() * 826);
    const data = await fetch(characterURL + randomNumber);
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