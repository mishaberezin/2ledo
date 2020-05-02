import React from 'react';
import { useDispatch } from 'react-redux';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { checkUserToken, setUserToken } from '../redux/actions/login-actions';
import { startMatchPolling } from '../redux/actions/local-state-actions';

const loadResources = async () => {
  await Promise.all([
    Asset.loadAsync([
      require('../assets/images/search-for-flat.jpg'),
      require('../assets/images/ready_to_road.gif'),
      require('../assets/images/card-tenant.png'),
      require('../assets/images/map.png'),
    ]),
    Font.loadAsync({
      // FontAwesome: require('../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'), // Костыль. После обновления на Expo 35.
      // 'Material Icons': require('../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf'), // Костыль. После обновления на Expo 35.
      // Ionicons: require('../node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'), // Костыль. После обновления на Expo 35.
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      'ceracy-desktop-medium': require('../assets/fonts/CeraCY-Desktop-Medium.otf'),
      'ceracy-desktop-bold': require('../assets/fonts/CeraCY-Desktop-Bold.otf'),
    }),
  ]);
};

export const Loading = (props) => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const onFinish = async () => {
    const userToken = await dispatch(checkUserToken());

    if (userToken) {
      await dispatch(setUserToken(userToken));
      navigation.navigate('SerpStackScreen');
      dispatch(startMatchPolling());
    } else {
      console.log('navigation.navigate');

      // navigation.navigate('Chat');
      navigation.navigate('SerpStackScreen');
    }
  };

  return (
    <AppLoading
      startAsync={loadResources}
      onError={(err) => console.warn(err)}
      onFinish={onFinish}
    />
  );
};
