import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { checkUserToken, setUserToken } from '../redux/actions/loginActions';
import { startMatchPolling } from '../redux/actions/localStateActions';
import { bindActionCreators } from 'redux';

function InitScreen(props) {
  const { navigation, checkUserToken, setUserToken, startMatchPolling } = props;

  const onAppLoading = async () => {
    const userToken = await checkUserToken();
    if (userToken) {
      await setUserToken(userToken);
      navigation.navigate('Serp');
      startMatchPolling();
    } else {
      navigation.navigate('Chat');
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
      require('../assets/images/search-for-flat.jpg'),
      require('../assets/images/ready_to_road.gif'),
      require('../assets/images/card-tenant.png'),
      require('@toledo/assets/images/map.png'),
    ]),
    Font.loadAsync({
      FontAwesome: require('../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'), // Костыль. После обновления на Expo 35.
      'Material Icons': require('../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf'), // Костыль. После обновления на Expo 35.
      Ionicons: require('../node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'), // Костыль. После обновления на Expo 35.
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      'ceracy-desktop-medium': require('../assets/fonts/CeraCY-Desktop-Medium.otf'),
      'ceracy-desktop-bold': require('../assets/fonts/CeraCY-Desktop-Bold.otf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkUserToken,
      setUserToken,
      startMatchPolling,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(InitScreen);
