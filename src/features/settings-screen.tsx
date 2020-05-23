import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '@src/redux/slices';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { SCREEN_BACKGROUND } from '@src/constants/colors';

export function SettingsScreen(props) {
  const { navigation } = props;

  const dispatch = useDispatch();

  const handleExitButtonPress = useCallback(() => {
    dispatch(logOut());
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: SCREEN_BACKGROUND,
        paddingTop: 10,
      }}
    >
      <Button
        buttonStyle={{ backgroundColor: 'gray', marginHorizontal: 10 }}
        title="Выйти"
        onPress={handleExitButtonPress}
      />
    </View>
  );
}
