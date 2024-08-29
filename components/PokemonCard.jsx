import { Image, Text, View } from "react-native";

export function PokemonCard({ pokemon }) {
  return (
    <View className="flex pr-4">
      <View className="flex-col bg-slate-400/10 w-60 h-40 rounded-3xl mt-6 pt-4">
        <View className="flex-row justify-evenly gap-4">
          <Text className="text-xl text-white">{pokemon.name}</Text>
          <View className="bg-white rounded-lg w-8">
            <Text className="text-center text-lg text-black">{pokemon.id}</Text>
          </View>
        </View>
        <View style={{ top: 30 }} className="absolute right-11">
          <Image
            source={{ uri: pokemon.img }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </View>
    </View>
  );
}
