import { ActivityIndicator, FlatList, View } from "react-native";
import { ScreenLayout } from "./ScreenLayout";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { getPokemons } from "../lib/pokeapi";
import { PokemonCard } from "./PokemonCard";

export function Main() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  return (
    <ScreenLayout>
      <View className="justify-center items-center pt-4">
        <Logo />
      </View>
      {pokemons.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator color={"#fff"} size={"large"} />
        </View>
      ) : (
        <FlatList
          horizontal
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({ item, index }) => (
            <PokemonCard pokemon={item} index={index} />
          )}
        />
      )}
    </ScreenLayout>
  );
}
