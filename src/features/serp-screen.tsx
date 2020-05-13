import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DeckWithControllsContainer } from './serp-screen/deck-with-controlls-container';
import { MatchPopup } from './serp-screen/match-popup';

export const SerpScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/map.png')}
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
      {/* <MatchPopup /> */}
      <DeckWithControllsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});
