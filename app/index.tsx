import React, { useState } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ThemeProvider } from 'react-native-elements';
import { reduxStore } from './redux/store';
import { Navigation } from './navigation';

if (__DEV__) {
  console.disableYellowBox = true;
}

const loadResources = async () => {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/search-for-flat.jpg'),
      require('./assets/images/ready_to_road.gif'),
      require('./assets/images/card-tenant.png'),
      require('./assets/images/map.png'),
    ]),
    Font.loadAsync({
      // FontAwesome: require('../node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'), // Костыль. После обновления на Expo 35.
      // 'Material Icons': require('../node_modules/react-native-vector-icons/Fonts/MaterialIcons.ttf'), // Костыль. После обновления на Expo 35.
      // Ionicons: require('../node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'), // Костыль. После обновления на Expo 35.
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'ceracy-desktop-medium': require('./assets/fonts/CeraCY-Desktop-Medium.otf'),
      'ceracy-desktop-bold': require('./assets/fonts/CeraCY-Desktop-Bold.otf'),
    }),
  ]);
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <AppLoading
      startAsync={loadResources}
      onError={(err) => {
        console.warn(err);
      }}
      onFinish={() => {
        setIsLoading(false);
      }}
      autoHideSplash={true}
    />
  ) : (
    <Provider store={reduxStore}>
      <ThemeProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation />
        </ApplicationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default registerRootComponent(App);
