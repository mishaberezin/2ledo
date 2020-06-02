import React, { FC } from "react";
import { View } from "react-native";
import { useStyleSheet, StyleService } from "@ui-kitten/components";

import { ToledoHeader4 } from "../toledo-header-4";
import { CardItemNumberOfRooms } from "./card-item-number-of-rooms";

interface Props {
  rentalPrice: number;
  roomsCount: number;
}

export const DeckCardShortInfo: FC<Props> = (props) => {
  const styles = useStyleSheet(themedStyles);
  const { rentalPrice, roomsCount } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoBlock}>
        <ToledoHeader4>{rentalPrice} руб</ToledoHeader4>
        <View style={styles.infoBlockCol}>
          <CardItemNumberOfRooms value={roomsCount} />
        </View>
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    marginHorizontal: 10,
  },
  infoBlock: {
    marginVertical: 10,
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
  avatarBlock: {
    marginTop: 10,
  },
});
