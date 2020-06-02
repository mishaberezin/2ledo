import React, { FC, useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "@src/navigation";
import { useDispatch } from "react-redux";
import { logOut } from "@src/redux/slices";
import { View } from "react-native";
import { Button } from "react-native-elements";

import { SCREEN_BACKGROUND } from "@src/constants/colors";

type Props = StackScreenProps<MainStackParamList, "Settings">;

export const SettingsScreen: FC<Props> = (props) => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const handleExitButtonPress = () => {
    dispatch(logOut());
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SCREEN_BACKGROUND,
        paddingTop: 10,
      }}
    >
      <Button
        buttonStyle={{ backgroundColor: "gray", marginHorizontal: 10 }}
        title="Выйти"
        onPress={handleExitButtonPress}
      />
    </View>
  );
};
