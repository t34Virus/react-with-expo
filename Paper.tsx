import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

export default function Paper() {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  return (
	<View style={styles.container}>
	{/* <Text>yo mama</Text> */}
		<Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
		<Snackbar
			visible={visible}
			onDismiss={onDismissSnackBar}
			action={{
			label: 'Undo',
			onPress: () => {
				// Do something
			},
			}}>
			🍐Your Pears🍐
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