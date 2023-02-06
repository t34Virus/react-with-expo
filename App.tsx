import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";
import Paper from './src/components/notifications/Paper';
import Toast from "./src/components/notifications/Toast";
import ImageResize from './src/components/images/ImageResizer';
import ImageManipulator from './src/components/images/ExpoImageManipulator';
export default function App() {
  return (
    <SafeAreaProvider>
      <ImageManipulator />
      {/* <ImageResize /> */}
      {/* <Paper /> */}
      {/* <Toast /> */}
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
