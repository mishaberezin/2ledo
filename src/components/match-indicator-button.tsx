import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native-elements";
import { setMatchIndicator } from "@src/redux/slices";

export const MatchIndicatorButton = (props) => {
  const { onPress } = props;
  const active = useSelector((state) => ({
    active: state.localState.matchIndicator,
  }));
  const dispatch = useDispatch();

  const icon = {
    type: "material",
    name: "favorite",
    ...(active ? { color: "red" } : {}),
  };

  return (
    <Button
      buttonStyle={{
        height: 56,
        justifyContent: "space-between",
      }}
      type="clear"
      icon={icon}
      onPress={() => {
        if (active) {
          dispatch(setMatchIndicator(false));
        }
        onPress();
      }}
    />
  );
};
