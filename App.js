import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Navigation from './navigation/AppStack';
import { ThemeProvider } from 'react-native-elements';
import store from './redux/store';

if (__DEV__) {
  console.disableYellowBox = true;
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Navigation />
        </View>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
