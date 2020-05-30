import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { withStyles } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";

import { GridCardImages } from "./grid-card-images";
import { CollapsibleRow } from "../collapsible-row";
// import { CardImages } from './card-images';
// import { CardHostShortInfo } from './card-host-short-info';
// import { CardHostDescriptionInfo } from './card-host-description-info';

const ItemDetailCardContainer = ({ card, eva: { style } }) => {
  const {
    rentalPrice,
    roomsCount,
    description,
    address,
    rentalPeriod,
    maxNumberOfPeople,
  } = card.apartment.data;

  const [opened, setOpened] = useState(false);
  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      <View style={style.cardContainer}>
        <GridCardImages photos={card.apartment.data.photos} />

        <View style={style.textBlock}>
          <Text style={style.textBlockTitle} category="s1">
            Название
          </Text>
          <Text style={style.textBlockText} category="p1">
            {address.postal}
          </Text>
        </View>
        <View style={style.textBlock}>
          <Text style={style.textBlockTitle} category="s1">
            Описание
          </Text>
          <Text style={style.textBlockText} category="p1">
            {description}
          </Text>
        </View>

        <CollapsibleRow title="Аренда">
          <View style={style.textBlock}>
            <Text style={style.textBlockTitle} category="s1">
              Квартира
            </Text>
          </View>
          <View style={style.textBlock}>
            <Text style={style.textBlockTitle} category="s1">
              От 1 года и надолго
            </Text>
          </View>
          <View style={style.textBlock}>
            <Text style={style.textBlockTitle} category="s1">
              1 комната
            </Text>
          </View>
          <View style={style.textBlock}>
            <Text style={style.textBlockTitle} category="s1">
              От 35 000 ₽
            </Text>
          </View>
        </CollapsibleRow>
      </View>
    </ScrollView>
  );
};

export const ItemDetailCard = withStyles(ItemDetailCardContainer, () => ({
  container: {
    backgroundColor: "white",
  },
  cardContainer: {
    // TODO: поправить отступ, придумать что-то
    paddingBottom: 100,
  },
  textBlock: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(120, 121, 147, 0.1)",
  },
  textBlockTitle: {
    color: "#787993",
    marginBottom: 4,
  },
  textBlockText: {
    color: "#25265E",
    lineHeight: 18,
  },
  textBlockGroup: {
    backgroundColor: "#fafaff",
    flexDirection: "row",
  },
  textBlockGroupName: {
    width: "90%",
  },
  textBlockGroupNameText: {
    fontSize: 22,
  },
  textBlockGroupOpenIcon: {
    width: "10%",
    top: 5,
  },
}));
