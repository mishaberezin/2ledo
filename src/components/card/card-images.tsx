import React, { Component } from 'react';
import { View, Image, Animated, TouchableOpacity } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';

import { DARK_VIOLET_COLOR } from '../../constants/colors';
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
    if (this.state.imageIndex < this.props.photos.length - 1) {
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
    const {
      photos,
      eva: { style },
    } = this.props;
    if (!photos || photos.length <= 1) {
      return null;
    }
    return (
      <View style={style.navContainer}>
        <View style={style.photosNavigation}>
          <View style={style.navElement}>
            <TouchableOpacity onPress={this.handlePrevItemPress}>
              <Ionicons
                name="ios-arrow-back"
                size={50}
                color={DARK_VIOLET_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={style.navElement}>
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
    const {
      photos,
      eva: { style },
    } = this.props;

    return (
      <View style={style.container}>
        <Animated.View
          style={[
            style.photosContainer,
            { transform: [{ translateX: this.translate }] },
          ]}
          onLayout={this.handleLayout}
        >
          {photos.map((image, index) => (
            <View key={index} style={style.imageContainer}>
              <Image
                source={image ? image.source || image : {}}
                style={style.image}
              />
            </View>
          ))}
        </Animated.View>
        {this.renderImagesNavigation()}
        <View style={style.photosCountContainer}>
          {photos.length > 1 &&
            photos.map((_, index) => (
              <View key={index} style={style.photosCountDot}>
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

export const CardImages = withStyles(CardImagesContainer, () => ({
  container: {},
  photosContainer: {
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
  photosNavigation: {
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
  photosCountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  photosCountDot: {
    marginHorizontal: 2,
  },
}));
