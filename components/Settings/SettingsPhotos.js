import React, { useState } from 'react';
import {
  View,
  FlatList,
  Image,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { getImageById } from '../../server/s3';

export function SettingsPhotos(props) {
  const { value } = props;
  const [imageUri, setImageUri] = useState(null);

  const flatListData = [...value, imageUri];

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

  console.log(imageUri);

  const handleChoosePhoto = async () => {
    await getPermissionAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        data={flatListData}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                style={styles.image}
                source={item.id ? getImageById(item.id).source : { uri: item }}
              />
            </View>
          );
        }}
      />

      <View style={{}}>
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width / 2 - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  image: {
    width: width,
    height: width,
    margin: 10,
  },
  flatListStyle: {
    flex: 1,
  },
});
