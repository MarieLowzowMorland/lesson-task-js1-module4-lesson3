const characterAnchorTag = (id) => `<a href="/character.html?character_id=${id}">${id}</a>`

document.getElementById("options").onchange = (event) => {
    let anchorTags = "";
    for (let i=0; i< event.target.value; i++){
        anchorTags += characterAnchorTag(i+1);
    }
    document.getElementById("links").innerHTML = anchorTags;
}