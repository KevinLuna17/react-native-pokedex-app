export async function getPokemons() {
  const listPokemones = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const rawData = await fetch(listPokemones);
  const json = await rawData.json();

  const { results } = json;

  const newPokemons = results.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const poke = await response.json();

    return {
      id: poke.id,
      name: poke.name,
      img: poke.sprites.other.home.front_default,
    };
  });

  return await Promise.all(newPokemons);
}

export async function getPokemonColor() {
  const pokemonColor = "https://pokeapi.co/api/v2/pokemon-species/";

  const rawData = await fetch(pokemonColor);
  const json = await rawData.json();

  const { results } = json;

  const newPokemonColor = results.map(async (color) => {
    const response = await fetch(color.url);
    const poke = await response.json();

    return {
      id: poke.id,
      name: poke.name,
      color: poke.color.name,
    };
  });

  return await Promise.all(newPokemonColor);
}
