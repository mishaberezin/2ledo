import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { TEXT_COLOR, SETTINGS_DIVIDER_COLOR } from '@toledo/constants/colors';

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
        ListFooterComponent={() => {
          return (
            <View style={styles.addPhotoButtonWrapper}>
              <Button
                containerStyle={styles.addPhotoButtonContainer}
                buttonStyle={styles.addPhotoButton}
                titleStyle={styles.addPhotoButtonTitle}
                title="Добавь больше фоток"
                onPress={handleChoosePhoto}
                icon={{ type: 'feather', name: 'plus-square' }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const width = Dimensions.get('window').width / 2 - 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: SETTINGS_DIVIDER_COLOR,
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  image: {
    width: width,
    height: width,
    margin: 10,
  },
  flatListStyle: {
    flex: 1,
  },
  addPhotoButtonWrapper: {
    flex: 1,
    alignItems: 'stretch',
  },
  addPhotoButtonContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderWidth: 2,
    margin: 10,
  },
  addPhotoButton: {
    backgroundColor: 'transparent',
    height: 80,
  },
  addPhotoButtonTitle: {
    color: TEXT_COLOR,
  },
});
