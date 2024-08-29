import { View } from "react-native";
import { getPokemonColor } from "../lib/pokeapi";
import { useEffect, useState } from "react";

export function PokemonColor() {
  const [pokemonColor, setPokemonColor] = useState([]);

  useEffect(() => {
    getPokemonColor().then((pokemonColor) => {
      setPokemonColor(pokemonColor);
    });
  }, []);
  return (
    <>
      {pokemonColor.map((poke) => (
        <View
          key={poke.id}
          style={{ flex: 1, backgroundColor: poke.color, width: 100 }}
        ></View>
      ))}
    </>
  );
}
