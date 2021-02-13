const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/";

const findCharacterId = () => {
    const search = location.search; 
    return characterId = search.substr(search.indexOf("=") + 1);
}

const showCharacterProfile = async () => {
    const characterId = findCharacterId();
    if(!characterId){
        return;
    }

    document.getElementById("character-id").innerHTML = `Selected id: ${characterId}`;

    const response = await fetch(`${url}${characterId}`);
    const characterProfileInfo = await response.json();
    const {name, occupation} = characterProfileInfo;
    document.getElementById("character-name").innerHTML = `<h1>${name}</h1>`;

    if(occupation){
        document.getElementById("character-occupations").innerHTML = `<p>Occupations: <b>${occupation.join(", ")}</b></p>`;
    }
}
showCharacterProfile();