import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCardId } from '@src/redux/actions/local-state-actions';
import { logOut } from '@src/redux/slices';
import { View } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';

import { SCREEN_BACKGROUND } from '@src/constants/colors';

export function SettingsTune(props) {
  const { navigation } = props;
  const cards = useSelector((state) => state.cards);
  const currentCardId = useSelector((state) => state.localState.currentCardId);

  const dispatch = useDispatch();

  const items = Object.keys(cards).map((id) => ({ type: cards[id].type, id }));

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
      <ButtonGroup
        onPress={(index) => dispatch(setCurrentCardId(items[index].id))}
        selectedIndex={items.findIndex((item) => item.id === currentCardId)}
        buttons={items.map((item) => item.type)}
        containerStyle={{ height: 30 }}
      />
      <Button
        buttonStyle={{ backgroundColor: 'gray', marginHorizontal: 10 }}
        title="Выйти"
        onPress={handleExitButtonPress}
      />
    </View>
  );
}
