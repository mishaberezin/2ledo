import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
//import { AsyncStorage } from 'react-native';
import { checkUserToken, setUserToken } from '../redux/actions/loginActions';
import { bindActionCreators } from 'redux';

function InitScreen(props) {
  const { navigation, checkUserToken, setUserToken } = props;

  const onAppLoading = async () => {
    //await AsyncStorage.removeItem('token');
    const userToken = await checkUserToken();
    if (userToken) {
      await setUserToken(userToken);
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
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(InitScreen);
