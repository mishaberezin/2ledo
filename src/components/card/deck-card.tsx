import React, { FC } from "react";
import { View, ScrollView, LayoutAnimation, Button } from "react-native";
import { useStyleSheet, StyleService } from "@ui-kitten/components";

import { DARK_VIOLET_COLOR } from "@src/constants/colors";

import { DeckCardShortInfo } from "./deck-card-short-info";
import { CardImages } from "./card-images";

import { ApartmentCard } from "@src/redux/slices/deck-slice";

interface Props {
  card: ApartmentCard;
  onOpen: (id: string) => void;
  cardStyle: any;
}

export const DeckCard: FC<Props> = (props) => {
  const { card, onOpen, cardStyle } = props;
  const { apartment } = card;

  const { photos, rentalPrice, roomsCount } = apartment.data;

  const styles = useStyleSheet(themedStyles);

  const onDetailsButtonPress = () => {
    onOpen(card.id);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.timing);
  };

  return (
    <ScrollView
      style={[styles.container, cardStyle]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.cardContainer}>
        <CardImages photos={photos} />
        <View>
          <DeckCardShortInfo
            rentalPrice={rentalPrice}
            roomsCount={roomsCount}
          />
          <Button title="Подробнее" onPress={onDetailsButtonPress} />
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
