import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScreenLayout } from "./components/ScreenLayout";
import { Main } from "./components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenLayout>
        <StatusBar style="light" />
        <Main />
      </ScreenLayout>
    </SafeAreaProvider>
  );
}
