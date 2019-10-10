import React, { Component } from 'react';
import { View, Image, Animated, TouchableOpacity } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import { DARK_VIOLET_COLOR } from '@toledo/constants/colors';

import { SCREEN_HEIGHT } from '../../constants/device';

class CardImagesContainer extends Component {
  state = {
    imageIndex: 0,
    imageWidth: null,
  };

  constructor(props) {
    super(props);
    this.translate = new Animated.Value(0);
  }

  handleLayout = ({
    nativeEvent: {
      layout: { width: imageWidth },
    },
  }) => {
    if (!this.state.imageWidth) {
      this.setState({ imageWidth });
    }
  };

  handleNextItemPress = () => {
    if (this.state.imageIndex < this.props.images.length - 1) {
      const translateValue =
        (this.state.imageIndex + 1) * this.state.imageWidth;
      Animated.spring(this.translate, {
        toValue: -translateValue,
      }).start();
      this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  };

  handlePrevItemPress = () => {
    if (this.state.imageIndex !== 0) {
      const translateValue =
        (this.state.imageIndex - 1) * this.state.imageWidth;
      Animated.spring(this.translate, {
        toValue: translateValue < 0 ? 0 : -translateValue,
      }).start();
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
  };

  renderImagesNavigation = () => {
    const { images, themedStyle } = this.props;
    if (!images || images.length <= 1) {
      return null;
    }
    return (
      <View style={themedStyle.navContainer}>
        <View style={themedStyle.imagesNavigation}>
          <View style={themedStyle.navElement}>
            <TouchableOpacity onPress={this.handlePrevItemPress}>
              <Ionicons
                name="ios-arrow-back"
                size={50}
                color={DARK_VIOLET_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={themedStyle.navElement}>
            <TouchableOpacity onPress={this.handleNextItemPress}>
              <Ionicons
                name="ios-arrow-forward"
                size={50}
                color={DARK_VIOLET_COLOR}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { images, themedStyle } = this.props;

    return (
      <View style={themedStyle.container}>
        <Animated.View
          style={[
            themedStyle.imagesContainer,
            { transform: [{ translateX: this.translate }] },
          ]}
          onLayout={this.handleLayout}
        >
          {images.map((uri, index) => (
            <View key={index} style={themedStyle.imageContainer}>
              <Image source={{ uri }} style={themedStyle.image} />
            </View>
          ))}
        </Animated.View>
        {this.renderImagesNavigation()}
        <View style={themedStyle.imagesCountContainer}>
          {images &&
            images.lenght > 1 &&
            images.map((_, index) => (
              <View key={index} style={themedStyle.imagesCountDot}>
                <Ionicons
                  name="ios-radio-button-on"
                  size={12}
                  color={
                    this.state.imageIndex === index ? DARK_VIOLET_COLOR : '#fff'
                  }
                />
              </View>
            ))}
        </View>
      </View>
    );
  }
}

const CardImages = withStyles(CardImagesContainer, () => ({
  container: {},
  imagesContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  navContainer: {
    position: 'absolute',
    top: SCREEN_HEIGHT / 4,
    transform: [{ translateY: -25 }],
    display: 'flex',
    width: '100%',
    flex: 1,
  },
  imagesNavigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: '100%',
    padding: 5,
  },
  image: {
    flex: 1,
    height: SCREEN_HEIGHT / 2,
    width: '100%',
  },
  imagesCountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  imagesCountDot: {
    marginHorizontal: 2,
  },
}));

export default CardImages;
