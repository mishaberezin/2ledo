import React, { FC, useCallback } from "react";
import {
  View,
  ScrollView,
  LayoutAnimation,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useStyleSheet, StyleService } from "@ui-kitten/components";

import { DARK_VIOLET_COLOR } from "@src/constants/colors";

import { CardHostShortInfo } from "./card-host-short-info";
import { CardHostDescriptionInfo } from "./card-host-description-info";
import { CardImages } from "./card-images";

interface ApartmentCard {
  id: number;
  type: string;
  apartment: {
    id: string;
    data: {
      photos: string[];
      description: string;
      rentalPrice: number;
      roomsCount: number;
      address: {
        coords: [number, number];
        postal: string;
      };
      floor: number;
    };
  };
}

interface Props {
  card: ApartmentCard;
  onOpen: () => {};
  onClose: () => {};
  cardStyle: any;
}

export const DeckHostCard: FC<Props> = (props) => {
  const { card, onOpen, onClose, cardStyle } = props;
  const { apartment } = card;
  const { photos } = apartment.data;

  const styles = useStyleSheet(themedStyles);

  const onDetailsButtonPress = useCallback(() => {
    onOpen(card.id);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.timing);
  }, [card]);

  return (
    <ScrollView
      style={[styles.container, cardStyle]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cardContainer}>
        <CardImages photos={photos} />
        <View>
          <CardHostShortInfo {...apartment.data} />
          <Button title="Подробнее" onPress={onDetailsButtonPress} />
          {/* <TouchableWithoutFeedback onPress={onDetailsButtonPress}>
            <View
              style={[
                styles.cardButton,
                styles.shadowStyles,
                opened && styles.cardButtonOpened,
              ]}
            >
              <Ionicons
                name={`ios-arrow-${opened ? 'up' : 'down'}`}
                size={22}
                style={!opened && { position: 'relative', top: 2 }}
                color="#fff"
              />
            </View>
          </TouchableWithoutFeedback> */}
        </View>
      </View>
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "white",
  },
  cardContainer: {
    marginBottom: 30,
    padding: 5,
  },
  shadowStyles: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardButton: {
    backgroundColor: DARK_VIOLET_COLOR,
    borderColor: DARK_VIOLET_COLOR,
    borderRadius: 10,
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 70,
  },
  cardButtonOpened: {
    top: 55,
  },
  freshIconConteiner: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 9,
  },
});
