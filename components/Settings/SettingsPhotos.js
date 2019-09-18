import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export function SettingsPhotos(props) {
  const { items } = props;
  const [imageUri, setImageUri] = useState(null);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        throw new Error(
          'Sorry, we need camera roll permissions to make this work!'
        );
      }
    }
  };

  const handleChoosePhoto = async () => {
    await getPermissionAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View>
      <Text>Photos:</Text>
      <View style={{}}>
        {items.map((item, i) => {
          return (
            <Image
              key={i}
              style={{ width: 50, height: 50 }}
              source={require('../../assets/images/man.png')}
            ></Image>
          );
        })}
        {imageUri && (
          <Image style={{ width: 50, height: 50 }} source={imageUri}></Image>
        )}
      </View>
      <View style={{}}>
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
    </View>
  );
}
