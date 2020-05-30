import React, { useState, useEffect, useRef } from "react";
import reject from "lodash/reject";
import { View, Animated, PanResponder, TouchableOpacity } from "react-native";
import { StyleService, useStyleSheet, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { DeckHostCard } from "@src/components/card";
import { SCREEN_WIDTH } from "@src/constants/device";

const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

export const DeckWithControlls = (props) => {
  const styles = useStyleSheet(themedStyles);

  const { cards, onLastCard, onSwipe } = props;

  const [cardsStack, setCardsStack] = useState([]);
  const [frontCard] = cardsStack;

  useEffect(() => {
    const firstCard = cardsStack[0];
    const tailStack = reject(cards, ["id", firstCard?.id]);

    // Оставляем верхнюю, чтобы убрать некрасивые ререндеры
    const newStack = [firstCard, ...tailStack].filter(Boolean);

    setCardsStack(newStack);
  }, [cards]);

  const shiftStack = () => {
    setCardsStack(cardsStack.slice(1));

    if (cardsStack.length === 1) {
      onLastCard();
    }
  };

  const position = useRef(new Animated.ValueXY()).current;

  const forceSwipe = (direction) => {
    const x = (direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH) * 2;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250,
    }).start(() => {
      onSwipeComplete(direction);
    });
  };

  const onSwipeComplete = (direction) => {
    onSwipe(frontCard.id, direction);
    position.setValue({ x: 0, y: 0 });
    shiftStack();
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      friction: 4,
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-45deg", "0deg", "45deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  const hadleControlPress = (toRight = false) => {
    forceSwipe(toRight ? "right" : "left");
  };

  const renderCard = ({ card }) => {
    return (
      <DeckHostCard
        card={card}
        cardStyle={styles.cardStyle}
        onOpen={props.onDetailButtonPress}
      />
    );
  };

  const cardStyle = [getCardStyle(), styles.card];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gesture) => {
      position.setValue({
        x: gesture.dx,
        y: gesture.dy,
      });
    },
    onPanResponderRelease: (evt, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe("right");
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe("left");
      } else {
        resetPosition();
      }
    },
  });

  const renderAnimatedCard = (props) => {
    return (
      <Animated.View style={cardStyle} {...panResponder.panHandlers}>
        {renderCard(props)}
      </Animated.View>
    );
  };

  return cardsStack.length === 0 ? (
    <Card title={"Упс!"}>
      <Text style={{ marginBottom: 20 }}>Больше нет карточек</Text>
    </Card>
  ) : (
    <View style={styles.container}>
      <View>
        {cardsStack[1] && renderCard({ card: cardsStack[1] })}
        {renderAnimatedCard({ card: cardsStack[0] })}
      </View>
      <Animated.View style={styles.controlsContainer}>
        <TouchableOpacity
          style={[styles.controlContainer, styles.controlContainerLeft]}
          onPress={() => hadleControlPress(false)}
        >
          <Ionicons
            name={"ios-close-circle"}
            size={50}
            color="red"
            style={{ position: "relative", top: 2 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.controlContainer, styles.controlContainerRight]}
          onPress={hadleControlPress}
        >
          <Ionicons
            name={"ios-checkmark-circle"}
            size={50}
            color="lightgreen"
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
  },
  card: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    position: "absolute",
  },
  cardStyle: {
    borderColor: "#f0f0ff",
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
  },
  controlsContainer: {
    position: "absolute",
    bottom: 0,
    opacity: 0.6,
    height: 60,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  controlContainer: {
    display: "flex",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  controlContainerLeft: {
    borderTopRightRadius: 100,
    paddingRight: 30,
  },
  controlContainerRight: {
    borderTopLeftRadius: 100,
    paddingLeft: 30,
  },
});
