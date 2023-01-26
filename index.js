const pokename = document.querySelector('[name="pokename"]');
const searchButton = document.getElementById('search');

(async function main() {
    const pokemonList = await api.getPokemonList();

    console.log("List all pokemons", pokemonList)
})();


