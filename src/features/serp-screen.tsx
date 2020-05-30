import React, { FC } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "@src/navigation";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DeckWithControllsContainer } from "./serp-screen/deck-with-controlls-container";

type Props = StackScreenProps<MainStackParamList, "Serp">;

export const SerpScreen: FC<Props> = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("@src/assets/images/map.png")}
      />
      <LinearGradient
        style={{
          display: "flex",
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
        colors={["white", "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <DeckWithControllsContainer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    display: "flex",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});
