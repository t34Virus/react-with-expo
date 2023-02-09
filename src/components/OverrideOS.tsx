import React, {Component, useEffect, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppState, Appearance, Platform, StyleSheet, Text, View, Button, useWindowDimensions, useColorScheme } from 'react-native';
import { getLocales } from 'expo-localization';

export default function OverrideOS() {
	const OS = Platform.OS
	const [languageCode, setLanguageCode] = useState(getLocales()[0].languageCode ? getLocales()[0].languageCode : 'en');
	const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
	const [appState, setAppState] = useState(AppState.currentState);
	const [windowDim, setWindowDim] = useState(useWindowDimensions().fontScale)
	const testcolorScheme = useColorScheme();
	console.log(testcolorScheme);
	const findFontSize = (fontScale: number) => {
		let textSize;
		let fontSize = 16;
		switch (true) {
		  case fontScale > 1.29:
			textSize = 'largest';
			fontSize = 28;
			break;
		  case fontScale < 1.29 && fontScale > 1.14:
			textSize = 'large';
			fontSize = 24;
			break;
		  case fontScale === 1:
			textSize = 'default';
			fontSize = 20;
			break;
		  default:
			textSize = 'small';
			break;
		}
	
		return [textSize, fontSize];
	}

	// let initialFontScale = useWindowDimensions().fontScale;
	let originalScale = findFontSize(windowDim);
	const [fontScale, setFontScale] = useState(originalScale[1]);
	
	let defaults = [getLocales()[0].languageCode ? getLocales()[0].languageCode : 'en', Appearance.getColorScheme(), originalScale[1]];

	const config = {
		en: {
		  lang: `Hello, I am an ${OS} Expo app. This system's language setting is in English but we can override them here:`,
		  color: `The system is set to ${colorScheme} mode but you can override here:`,
		  font: `This device's font is set to ${originalScale[0]} but only you can tell me what to do!`,
		  restore: 'Restore System Default',
		  buttons: ['Small','Medium','Large', 'Largest', 'Dark', 'Light']
		},
		fr: {
		  lang: `Bonjour, je suis une application ${OS} Expo. Le paramètre de langue de ce système est en français, mais nous pouvons les remplacer ici:`,
		  color: `Le système est réglé sur le mode ${colorScheme === 'dark' ? 'sombre' : 'lumière'} mais vous pouvez passer outre ici:`,
		  font: `La police de cet appareil est définie sur ${originalScale[0]} mais vous seul pouvez me dire quoi faire !`,
		  restore: 'Restaurer les paramètres par défaut du système',
		  buttons: ['Petit','Moyen','Gros','Le Plus Grand', 'Sombre', 'Lumière']
		},
		es: {
		  lang: `Hola, soy una aplicación de ${OS}. La configuración de idioma de este sistema está en español, pero podemos anularla aquí: `,
		  color: `El sistema está configurado en modo ${colorScheme === 'dark' ? 'oscuro' : 'de luz'}, pero puede anularlo aquí:`,
		  font: `¡La fuente de este dispositivo está configurada en ${originalScale[0]} pero solo tú puedes decirme qué hacer!`,
		  restore: 'Restaurar valores predeterminados del sistema',
		  buttons: ['Pequeño','Mediano','Grande','Más Grande', 'Oscuro', 'De Luz']
		}
	}
	const [currentText, setCurrentText] = useState(config['en']);
	const restoreDefaults = (defaults: Array<any>) => {
		setLanguageCode(defaults[0]);
		setColorScheme(defaults[1]);
		setFontScale(defaults[2]);
		setCurrentText(config[defaults[0]])
	}
	useEffect(() => {
		Appearance.addChangeListener(({colorScheme}) => setColorScheme(colorScheme));

	}, []);
	AppState.addEventListener('change', nextAppState => {
		if (
			appState.match(/inactive|background/) &&
			nextAppState === 'active'
		  ) {
			console.log('App has come to the foreground!');
			defaults = [getLocales()[0].languageCode, Appearance.getColorScheme(), 24];
			// restoreDefaults(defaults);
		  }
		  setAppState(nextAppState);
		  
	})

	return (
	<View 
      style={[styles.container, colorScheme === 'dark' ? {backgroundColor: '#555'} : {backgroundColor: '#fff'}]}
      >
      <Text
        style={[{fontSize: fontScale}, colorScheme === 'dark' ? styles.textColorDark : styles.textColorLight]}
      >{currentText.lang}</Text>
      <View style={styles.buttonBox}>
        <Button
          style={styles.button}
          title="English"
          onPress={() => setCurrentText(config['en'])}
        />
        <Button
          style={styles.button}
          title="Español"
          onPress={() => setCurrentText(config['es'])}
        />
        <Button
          style={styles.button}
          title="Français"
          onPress={() => setCurrentText(config['fr'])}
        />
      </View>
      <Text
        style={[{fontSize: fontScale}, colorScheme === 'dark' ? styles.textColorDark : styles.textColorLight]}
      >{currentText.color}</Text>

      <View style={styles.buttonBox}>
          <Button
            style={styles.button}
            title={currentText.buttons[4]}
            onPress={() => setColorScheme('dark')}
          />
          <Button
            style={styles.button}
            title={currentText.buttons[5]}
            onPress={() => setColorScheme('light')}
          />
      </View>
      <Text 
        style={[{fontSize: fontScale}, colorScheme === 'dark' ? styles.textColorDark : styles.textColorLight]}
      >{currentText.font}</Text>

      <View style={styles.buttonBox}>
          <Button
            style={styles.button}
            title={currentText.buttons[0]}
            onPress={() => setFontScale(16)}
          />
          <Button
            style={styles.button}
            title={currentText.buttons[1]}
            onPress={() => setFontScale(20)}
          />
          <Button
            style={styles.button}
            title={currentText.buttons[2]}
            onPress={() => setFontScale(24)}
          />
          <Button
            style={styles.button}
            title={currentText.buttons[3]}
            onPress={() => setFontScale(28)}
          />
      </View>
      <StatusBar style="auto" />
      <Button
            style={styles.button}
            title={currentText.restore}
            onPress={() => restoreDefaults(defaults)}
          />
    </View>
	);
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	buttonBox: {
	  flexDirection: 'row'
	},
	button: {
	  marginRight: 24,
	  backgroundColor: 'black'
	},
	textColorLight: {
	  color: '#000'
	},
	textColorDark: {
	  color: '#fff'
	},
});
