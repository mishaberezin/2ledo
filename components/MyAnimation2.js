import React from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground
} from "react-native";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 250,
    height: 200,
    backgroundColor: "red"
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});

class MyAnimation extends React.Component {
  state = {
    w: 150,
    h: 120
  };

  onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({ w: this.state.w + 20, h: this.state.h + 15 });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/robot-dev.png")}
          style={{ width: this.state.w, height: this.state.h }}
        ></ImageBackground>

        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MyAnimation;
