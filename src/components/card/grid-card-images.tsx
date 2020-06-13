import React from "react";
import { View, Image, Animated, TouchableOpacity } from "react-native";
import { withStyles } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

import { DARK_VIOLET_COLOR } from "../../constants/colors";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/device";

const GridCardImagesContainer = ({ photos }) => {
  return <ImageNetOneTwoThree photos={photos} />;
};
export const GridCardImages = withStyles(GridCardImagesContainer, () => ({}));

// TODO: перенести в компонент. Это самый простой вариант сетки
const ImageNetOneTwoThreeContainer = ({ photos, eva: { style } }) => {
  const [image] = photos;

  return (
    <View style={style.container}>
      <View style={style.imageGrid}>
        <View style={style.imageGridRow}>
          <View style={style.imageGridWideImage}>
            <Image
              source={photos[0] ? photos[0].source : {}}
              style={style.imageGridImage}
            />
          </View>
        </View>

        <View style={style.imageGridRow}>
          {photos.slice(1, 3).map((image, i) => {
            const imgBlockStyle = [
              style.imageGridTwoImages,
              ...(i % 2
                ? [style.imageGridTwoImagesSecond]
                : [style.imageGridTwoImagesFirst]),
            ];

            return (
              <View key={"imageGridTwoImages_" + i} style={imgBlockStyle}>
                <Image
                  source={image ? image.source : {}}
                  style={[style.imageGridImage, style.imageGridImageRounded]}
                />
              </View>
            );
          })}
        </View>

        <View style={style.imageGridRow}>
          {photos.slice(3, 6).map((image, i) => {
            const classes = [
              style.imageGridTreeImagesFirst,
              style.imageGridTreeImagesSecond,
              style.imageGridTreeImagesThird,
            ];

            const imgBlockStyle = [style.imageGridThreeImages, classes[i % 3]];
            return (
              <View key={"imageGridTwoImages_" + i} style={imgBlockStyle}>
                <Image
                  source={image ? image.source : {}}
                  style={[style.imageGridImage, style.imageGridImageRounded]}
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const ImageNetOneTwoThree = withStyles(ImageNetOneTwoThreeContainer, () => ({
  container: {
    display: "flex",
    flex: 1,
    paddingBottom: 16,
    backgroundColor: "rgba(120, 121, 147, 0.1)",
  },
  imageGrid: {
    width: "100%",
  },
  imageGridRow: {
    flex: 1,
    flexDirection: "row",
  },
  imageGridImage: {
    flex: 1,
    width: "100%",
  },
  imageGridImageRounded: {
    borderRadius: 10,
    borderColor: "#f0f0ff",
    borderWidth: 1,
  },
  imageGridWideImage: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.3,
  },
  imageGridTwoImages: {
    width: "50%",
    height: 150,
    padding: 8,
  },
  imageGridTwoImagesFirst: {
    paddingRight: 3,
  },
  imageGridTwoImagesSecond: {
    paddingLeft: 3,
  },
  imageGridThreeImages: {
    width: "33.33%",
    height: 150,
    paddingHorizontal: 8,
  },
  imageGridTreeImagesFirst: {
    paddingRight: 3,
  },
  imageGridTreeImagesSecond: {
    paddingLeft: 3,
    paddingRight: 3,
  },
  imageGridTreeImagesThird: {
    paddingLeft: 3,
  },
}));
