import React from "react";
import { View } from "react-native";
import { Text, withStyles } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

const CardItemNumberOfRoomsBare = ({ value, eva: { style } }) => {
  return (
    <View style={style.container}>
      <View style={style.rooms}>
        <View style={style.icon}>
          <Ionicons name="ios-cube" size={16} color="gray" />
        </View>
        <Text category="p2">{value} комн.</Text>
      </View>
    </View>
  );
};

export const CardItemNumberOfRooms = withStyles(
  CardItemNumberOfRoomsBare,
  () => ({
    container: {
      display: "flex",
    },
    rooms: {
      flexDirection: "row",
    },
    icon: {
      marginRight: 4,
    },
  })
);
