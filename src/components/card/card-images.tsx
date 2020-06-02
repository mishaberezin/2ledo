import React, { FC, useState } from "react";
import { View, Image, Animated, TouchableOpacity } from "react-native";
import { useStyleSheet, StyleService } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

import { DARK_VIOLET_COLOR } from "../../constants/colors";
import { SCREEN_HEIGHT } from "../../constants/device";

interface Props {
  photos: any[];
}

export const CardImages: FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles);

  const { photos } = props;

  const [imageIndex, setImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(null);

  const translate = new Animated.Value(0);

  const handleLayout = (event) => {
    const imageWidth = event.nativeEvent.layout.width;

    if (!imageWidth) {
      setImageWidth({ imageWidth });
    }
  };

  const handleNextItemPress = () => {
    if (imageIndex < photos.length - 1) {
      const translateValue = (imageIndex + 1) * imageWidth;

      Animated.spring(translate, {
        toValue: -translateValue,
      }).start();

      setImageIndex(imageIndex + 1);
    }
  };

  const handlePrevItemPress = () => {
    if (imageIndex !== 0) {
      const translateValue = (imageIndex - 1) * imageWidth;

      Animated.spring(translate, {
        toValue: translateValue < 0 ? 0 : -translateValue,
      }).start();

      setImageIndex(imageIndex - 1);
    }
  };

  const renderImagesNavigation = () => {
    if (!photos || photos.length <= 1) {
      return null;
    }

    return (
      <View style={styles.navContainer}>
        <View style={styles.photosNavigation}>
          <View style={styles.navElement}>
            <TouchableOpacity onPress={handlePrevItemPress}>
              <Ionicons
                name="ios-arrow-back"
                size={50}
                color={DARK_VIOLET_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.navElement}>
            <TouchableOpacity onPress={handleNextItemPress}>
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

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.photosContainer,
          { transform: [{ translateX: translate }] },
        ]}
        onLayout={handleLayout}
      >
        {photos.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={image ? image.source || image : {}}
              style={styles.image}
            />
          </View>
        ))}
      </Animated.View>
      {renderImagesNavigation()}
      <View style={styles.photosCountContainer}>
        {photos.length > 1 &&
          photos.map((_, index) => (
            <View key={index} style={styles.photosCountDot}>
              <Ionicons
                name="ios-radio-button-on"
                size={12}
                color={imageIndex === index ? DARK_VIOLET_COLOR : "#fff"}
              />
            </View>
          ))}
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {},
  photosContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  navContainer: {
    position: "absolute",
    top: SCREEN_HEIGHT / 4,
    transform: [{ translateY: -25 }],
    display: "flex",
    width: "100%",
    flex: 1,
  },
  photosNavigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "100%",
    padding: 5,
  },
  image: {
    flex: 1,
    height: SCREEN_HEIGHT / 2,
    width: "100%",
  },
  photosCountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  photosCountDot: {
    marginHorizontal: 2,
  },
});
