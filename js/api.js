const api = {}

api.getPokemonList = async () => {
    let pokemons = await fetch('http://localhost:3000/pokemon')
        .then((response) =>
            response.json()
        )
        .then(data => {
            return data;
        })
        .catch((error) => console.log("Error", error));

    return pokemons;
}

api.searchPokemonByName = async () => {
    return pokemon = await fetch('http://localhost:3000/pokemon?name=' + pokename)
        .then((response) =>
            response.json()
        )
        .then(data => {
            return data;
        })
        .catch((error) => console.log("Error", error));
} 