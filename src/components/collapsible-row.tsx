import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { withStyles } from "@ui-kitten/components";
import Collapsible from "react-native-collapsible";

const CollapsibleRowContainer = ({ children, title, eva: { style } }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      <Button
        buttonStyle={style.button}
        titleStyle={style.title}
        type="clear"
        icon={
          <Ionicons
            name={`ios-arrow-${collapsed ? "down" : "up"}`}
            size={24}
            color={"rgb(163, 163, 241)"}
          />
        }
        iconRight={true}
        title={title}
        onPress={() => setCollapsed(!collapsed)}
      />
      <Collapsible collapsed={collapsed}>{children}</Collapsible>
    </View>
  );
};

export const CollapsibleRow = withStyles(CollapsibleRowContainer, () => ({
  block: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(120, 121, 147, 0.1)",
    backgroundColor: "#fafaff",
    flexDirection: "row",
  },
  title: {
    color: "#25265E",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    height: 66,
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingRight: 35,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(120, 121, 147, 0.1)",
    backgroundColor: "#fafaff",
    flexDirection: "row",
  },
  icon: {
    color: "rgb(163, 163, 241)",
  },
}));
