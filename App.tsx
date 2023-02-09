import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, StyleSheet, Text, View } from "react-native";
import Carousel from './src/components/carousel/Carousel';
import PinchNZoom from './src/components/images/PinchNZoom';
import OverrideOS from './src/components/OverrideOS';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function CarouselComponent({navigation}) {
  return (
    <SafeAreaProvider>
      <Button
        onPress={() =>
          navigation.navigate('PinchNZoom')
        }
        title="Pinch N Zoom"
      />
      <Carousel />
    </SafeAreaProvider>
  );
}
function PinchNZoomComponent({navigation}) {
  return (
    <SafeAreaProvider>
      <Button
        onPress={() => navigation.goBack()} 
        title="Go Back"
      />
      <PinchNZoom />
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Carousel" component={CarouselComponent} />
        <Stack.Screen name="PinchNZoom" component={PinchNZoomComponent} />
      </Stack.Navigator>
    </NavigationContainer>
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
