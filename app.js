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

                let newDiv = document.createElement(`div`);
                newDiv.classList.add(`pokemon`)
                div.append(newDiv);

                newDiv.innerHTML = `<div class="img-container">
                <img src="${newPokemon.sprites.front_default}" alt = "${newPokemon.name}">
                </div>
                <h2>${newPokemon.name}</h2>`;
            
            } catch (err) {
                console.log(`Failed to Get Pokemon Info: ${err}`);
            }
            
        }
        console.log(pokemon);
    } catch (err) {
        console.log(`Failed to Get Pokemon List: ${err}`);
    }

}

loadPokemon();