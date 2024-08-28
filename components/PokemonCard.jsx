import { Image, Text, View } from "react-native";

export function PokemonCard({ pokemon }) {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-col justify-center items-center bg-slate-400/10 w-60 h-auto rounded-3xl mt-6 pt-4">
        <View className="flex-row gap-4 justify-center items-center">
          <Text className="text-2xl text-white">{pokemon.name}</Text>
          <View className="bg-white rounded-lg w-8">
            <Text className="text-center text-lg text-black">{pokemon.id}</Text>
          </View>
        </View>

        <Image
          source={{ uri: pokemon.img }}
          style={{ width: 150, height: 150 }}
        />
      </View>
    </View>
  );
}
