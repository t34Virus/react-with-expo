import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";
import Carousel from './src/components/carousel/Carousel';
export default function App() {
  return (
    <SafeAreaProvider>
      <Carousel />
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    fontSize: 14,
    marginTop: 10,
  },
});
