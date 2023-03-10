import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

export default function Paper() {
  const [visiblePear, setVisiblePear] = React.useState(false);
  const [visibleApple, setVisibleApple] = React.useState(false);

  const onTogglePearBar = () => setVisiblePear(!visiblePear);
  const onToggleAppleBar = () => setVisibleApple(!visibleApple);

  const onDismissPearBar = () => setVisiblePear(false);
  const onDismissAppleBar = () => setVisibleApple(false);
  return (
	<View style={styles.container}>
	{/* <Text>yo mama</Text> */}
		<Button onPress={onTogglePearBar}>{visiblePear ? 'HidePear' : 'ShowPear'}</Button>
		<Snackbar
			visible={visiblePear}
			onDismiss={onDismissPearBar}
			action={{
			label: 'Undo',
			onPress: () => {
				// Do something
			},
			}}>
			🍐Your Pears🍐
		</Snackbar>
		<Button onPress={onToggleAppleBar}>{visibleApple ? 'HideApple' : 'ShowApple'}</Button>
		<Snackbar 
			wrapperStyle={{ top: 50 }}
			visible={visibleApple}
			onDismiss={onDismissAppleBar}
			action={{
			label: 'Undo',
			onPress: () => {
				// Do something
			},
			}}>
			🍎Your Apples🍎
		</Snackbar>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'center',
  },
});