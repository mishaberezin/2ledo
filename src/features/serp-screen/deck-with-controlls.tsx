import React, { FC, useState, useEffect, useRef } from "react";
import reject from "lodash/reject";
import { View, Animated, PanResponder, TouchableOpacity } from "react-native";
import { StyleService, useStyleSheet, Text } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { DeckCard } from "@src/components/card";
import { SCREEN_WIDTH } from "@src/constants/device";

import { ApartmentCard } from "@src/redux/slices/deck-slice";

const SWIPE_THRESHOLD = 0.4 * SCREEN_WIDTH;

interface Props {
  cards: ApartmentCard[];
  isLoading: boolean;
  onCardLike: (id: string) => void;
  onCardDislike: (id: string) => void;
  onCardDetails: (id: string) => void;
}

export const DeckWithControlls: FC<Props> = (props) => {
  const { cards, isLoading, onCardLike, onCardDislike, onCardDetails } = props;

  const styles = useStyleSheet(themedStyles);

  // Храним карточки во вспомогательном стеке:
  // 1. Удобнее работать
  // 2. Нужно по-особому работать с первой карточкой
  const [cardsStack, setCardsStack] = useState(cards);
  const [frontCard, nextCard] = cardsStack;

  // Обновляем стек через useEffect, не трогаем первую карточку.
  useEffect(() => {
    const tailStack = reject(cards, ["id", frontCard?.id]);

    // Оставляем верхнюю, чтобы избежать некрасивые ререндеры.
    // Фильтруем на случай если первой карточки нет.
    const newStack = [frontCard, ...tailStack].filter(Boolean);

    setCardsStack(newStack);
  }, [cards]);

  const shiftStack = () => {
    setCardsStack(cardsStack.slice(1));
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
    const { id } = frontCard;

    if (direction === "right") {
      onCardLike(id);
    } else {
      onCardDislike(id);
    }
    position.setValue({ x: 0, y: 0 });
    shiftStack();
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      friction: 4,
    }).start();
  };

  const getPositionStyles = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-45deg", "0deg", "45deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

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

  return cardsStack.length === 0 ? (
    <Card>
      <Text style={{ marginBottom: 20 }}>
        {isLoading ? "Загружаем..." : "Больше нет карточек"}
      </Text>
    </Card>
  ) : (
    <View style={styles.container}>
      <View>
        {nextCard && (
          <View>
            <DeckCard
              card={cardsStack[1]}
              cardStyle={styles.cardStyle}
              onOpen={onCardDetails}
            />
          </View>
        )}
        <Animated.View
          style={[styles.animatedContainer, getPositionStyles()]}
          {...panResponder.panHandlers}
        >
          <DeckCard
            card={frontCard}
            cardStyle={styles.cardStyle}
            onOpen={onCardDetails}
          />
        </Animated.View>
      </View>
      <Animated.View style={styles.controlsContainer}>
        <TouchableOpacity
          style={[styles.controlContainer, styles.controlContainerLeft]}
          onPress={() => {
            forceSwipe("right");
          }}
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
          onPress={() => {
            forceSwipe("left");
          }}
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
  animatedContainer: {
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
