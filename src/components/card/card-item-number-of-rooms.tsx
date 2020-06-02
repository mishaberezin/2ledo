import React, { FC } from "react";
import { View } from "react-native";
import { Text, useStyleSheet, StyleService } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  value: string;
}

export const CardItemNumberOfRooms: FC<Props> = (props) => {
  const { value } = props;
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.rooms}>
        <View style={styles.icon}>
          <Ionicons name="ios-cube" size={16} color="gray" />
        </View>
        <Text category="p2">{value} комн.</Text>
      </View>
    </View>
  );
};

const themedStyles = StyleService.create({
  container: {
    display: "flex",
  },
  rooms: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 4,
  },
});
