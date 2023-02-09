import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Asset } from 'expo-asset';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

export default function ImageManipulator() {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState<null | Asset>();

  const resize = async () => {
    const manipResult = await manipulateAsync(
      image.localUri || image.uri,
      [{ resize: {
        height: 144.8,
        width: 100
      } }],
      { compress: 1, format: SaveFormat.PNG, base64: false }
    );
    setImage(manipResult);
  };

  const _renderImage = () => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image.localUri || image.uri }} style={styles.image} />
    </View>
  );
  const selectImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const asset = result.assets[0];
    if (asset) {
      setImage(asset);
    }
  };
  const saveImage = async () => {
    await MediaLibrary.requestPermissionsAsync();
    await MediaLibrary.saveToLibraryAsync(image.uri);
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
        <Text>Select an image</Text>
      </TouchableOpacity>
      {image ? (
        <View>
          <Text style={styles.instructions}>This is the original image:</Text>
          <Image
            style={styles.image}
            source={{ uri: image.uri }}
            resizeMode="contain"
          />
          <Button title="Resize" onPress={resize} />
          <Text></Text>
          <Button title="Save" onPress={saveImage} />
        </View>
      ) : null}
      { ready && image && _renderImage() }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#2596be',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },
});
