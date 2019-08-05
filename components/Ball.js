import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default class Ball extends Component {
  UNSAFE_componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 0, y: 400 },
      duration: 4000
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 30
  }
});
