// Add your code to this file
let allHeadings = document.querySelectorAll("body");
for (let i = 0; i < allHeadings.length; i++) {
    allHeadings[i].style["background-color"] = "darkblue";
}
let allH1 = document.querySelector("h1");
allH1.style.textDecoration = 'underline';

let pic1 = document.querySelector("#starters_image_div img");
pic1.style.border = '2px dotted orange';


let allH2 = document.querySelector("h2");
allH2.style.display = 'flex';
allH2.style.justifyContent = 'center';
allH2.style.alignItems = 'center';
allH2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

let allPokemon = document.getElementsByClassName("pokemon_images");

for(let i = 0; i < allPokemon.length; i++) {
allPokemon[i].style.border = '2px dotted orange';
}

let bulbContainer = document.getElementById("bulbasaur_container");
bulbContainer.style["background-color"]="teal"

let pokeName = document.getElementsByClassName("pokemon_names");
for (let i=0; i < pokeName.length; i++) {
    pokeName[i].style["color"] = "gold";
}

let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project"
footer.style.textDecoration = 'underline';

