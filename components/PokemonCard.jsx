import { Image, Text, View } from "react-native";

export function PokemonCard({ pokemon }) {
  return (
    <View className="flex pr-4 pt-10">
      <View className="flex-col bg-slate-400/10 w-60 h-72 rounded-3xl mt-6 pt-4">
        <View style={{ top: -70 }} className="absolute right-11">
          <Image
            source={{ uri: pokemon.img }}
            style={{ width: 150, height: 150 }}
          />
        </View>

        <View className="pt-16 flex-row justify-evenly gap-4">
          <Text className="text-xl text-white">{pokemon.name}</Text>
          <View className="bg-white rounded-lg w-8">
            <Text className="text-center text-lg text-black">{pokemon.id}</Text>
          </View>
        </View>

        <View className="pt-4 flex-row justify-evenly gap-4">
          <Text className="text-base text-white/70">Height</Text>
          <Text className="text-base text-white/70">Weight</Text>
        </View>
        <View className="pb-2 flex-row justify-evenly gap-4">
          <Text className="text-base text-yellow-400/80">2'04"</Text>
          <Text className="text-base text-yellow-400/80">15.2lbs</Text>
        </View>

        <View className="pt-4 flex-row justify-evenly">
          <Text className="text-base text-white/70">HP</Text>
          <Text className="text-base text-white/70">Attack</Text>
          <Text className="text-base text-white/70">Defense</Text>
        </View>
        <View className="flex-row justify-evenly">
          <Text className="text-base text-yellow-400/80">45"</Text>
          <Text className="text-base text-yellow-400/80">49</Text>
          <Text className="text-base text-yellow-400/80">49</Text>
        </View>

        <View
          className="absolute p-2 bg-yellow-400 rounded-xl justify-center items-center -bottom-4"
          style={{ marginLeft: 76 }}
        >
          <Text className="font-bold">{`<`} 250 mtrs</Text>
        </View>
      </View>
    </View>
  );
}
