import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import DeckWithControllsContainer from '@toledo/components/DeckWithControllsContainer';
import { LinearGradient } from 'expo-linear-gradient';

function SerpScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{
          display: 'flex',
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
        source={require('@toledo/assets/images/map.png')}
      ></ImageBackground>
      <LinearGradient
        style={{
          display: 'flex',
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
        colors={['white', 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      ></LinearGradient>
      <DeckWithControllsContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SerpScreen;
