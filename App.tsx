import { SafeAreaProvider } from 'react-native-safe-area-context';
import Paper from './src/components/notifications/Paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <Paper />
    </SafeAreaProvider>
  );
}
