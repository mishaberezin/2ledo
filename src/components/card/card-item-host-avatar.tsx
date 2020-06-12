import React from "react";
import { View } from "react-native";
import { Text, Avatar, withStyles } from "@ui-kitten/components";

const CardItemHostAvatarBare = ({ uri, name, eva: { style } }) => {
  return (
    <View style={style.container}>
      <Avatar source={uri ? uri.source || { uri } : {}} />
      <Text style={style.avatarBlockName} category="s1">
        {name}
      </Text>
    </View>
  );
};

export const CardItemHostAvatar = withStyles(CardItemHostAvatarBare, () => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 30,
  },
  avatarBlockName: {
    marginLeft: 10,
  },
}));
