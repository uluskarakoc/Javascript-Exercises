const characterURL = "https://rickandmortyapi.com/api/character/";

const rickAndMortyCharacters = async () => {
    const data = await fetch(characterURL);
    console.log(data);
    const json = await data.json();
    console.log(json)
}

rickAndMortyCharacters();