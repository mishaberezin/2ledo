import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ProgressiveImage = props => {
  return (
    <View
      style={[
        styles.container,
        { width: props.style.width, height: props.style.height },
      ]}
    >
      <Image {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
  },
});

export default ProgressiveImage;
