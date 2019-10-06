import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import { SCREEN_HEIGHT } from '../../constants/device';
import { withStyles } from 'react-native-ui-kitten';

const CardImagesContainer = ({ images, themedStyle }) => (
  <View style={themedStyle.container}>
    {images.map(uri => (
      <Image key={uri} source={{ uri }} style={themedStyle.image} />
    ))}
  </View>
);

const CardImages = withStyles(CardImagesContainer, () => ({
  container: {},
  image: {
    height: SCREEN_HEIGHT * 0.5,
  },
}));

export default CardImages;
