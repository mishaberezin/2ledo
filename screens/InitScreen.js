import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';

function InitScreen(props) {
  const { navigation } = props;

  const onAppLoading = async () => {
    const userToken = await AsyncStorage.getItem('token');

    if (userToken) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <AppLoading
      startAsync={loadResourcesAsync}
      onError={handleLoadingError}
      onFinish={() => onAppLoading()}
    />
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
      require('../assets/images/search-for-flat.jpg'),
      require('../assets/images/ready_to_road.gif'),
      require('../assets/images/card-tenant.png'),
    ]),
    Font.loadAsync({
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      'ceracy-desktop-medium': require('../assets/fonts/CeraCY-Desktop-Medium.otf'),
      'ceracy-desktop-bold': require('../assets/fonts/CeraCY-Desktop-Bold.otf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

export default InitScreen;
