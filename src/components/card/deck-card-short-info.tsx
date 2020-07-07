import React, { FC } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useStyleSheet, StyleService } from "@ui-kitten/components";

import { ToledoHeader4 } from "../toledo-header-4";
import { CardItemNumberOfRooms } from "./card-item-number-of-rooms";

interface Props {
  rentalPrice: number;
  roomsCount: number;
  location: string;
}

export const DeckCardShortInfo: FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { rentalPrice, roomsCount, location } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <ToledoHeader4>{rentalPrice.toLocaleString("ru-RU")}</ToledoHeader4>
        <View style={styles.infoBlockCol}>
          <CardItemNumberOfRooms value={roomsCount} />
        </View>
      </View>
      <Text style={styles.locationText}>{location}</Text>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    marginHorizontal: 10,
  },
  infoBlock: {
    marginTop: 10,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  infoBlockCol: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  locationText: {
    color: "#787993",
    fontSize: 13,
  },
});
