import { Text, View } from "react-native";
import { SearchIcon } from "./Icons";

export function Search() {
  return (
    <View className="pt-4 mb-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl text-yellow-400 font-bold">Pokedex</Text>
        <View className="p-2 bg-yellow-400 rounded-lg">
          <SearchIcon />
        </View>
      </View>
      <Text className="mt-5 text-lg text-white">Near You</Text>
    </View>
  );
}
