let pokemon;
let div = document.querySelector(`#container`);


async function loadPokemon() {
    try {
        pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`);
        pokemon = pokemon.data
        let pokeList = pokemon.results;
        
        for (poke of pokeList) {
            try {
                newPokemon = await axios.get(`${poke.url}`);
                newPokemon = newPokemon.data;
    
                div.insertAdjacentHTML(`beforeend`, `<div id="${newPokemon.name}" class="pokemon"></div>`);
                let newDiv = document.querySelector(`#${newPokemon.name}`);
                newDiv.insertAdjacentHTML(`beforeend`, `<div class="img-container"><img src="${newPokemon.sprites.front_default}" alt = "${newPokemon.name}"></div>`);
                newDiv.insertAdjacentHTML(`beforeend`, `<h2>${newPokemon.name}</h2>`);
            } catch (err) {
                console.log(err);
            }
            
        }
        console.log(pokemon);
    } catch (err) {
        console.log(err);
    }

}

loadPokemon();