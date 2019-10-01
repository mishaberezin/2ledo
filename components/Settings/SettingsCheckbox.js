import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import grid from '../../constants/grid';
import colors from '../../constants/colors';

export function SettingsCheckbox(props) {
  const { label = 'Лейбл' } = props;
  const { defaultSideMargin } = grid;
  const { darkTextColor } = colors;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListItem
      containerStyle={{
        height: 56,
        paddingLeft: defaultSideMargin,
        paddingRight: defaultSideMargin,
      }}
      title={label}
      checkmark={{
        type: 'ionicon',
        name: isChecked
          ? 'ios-checkmark-circle'
          : 'ios-checkmark-circle-outline',
        color: darkTextColor,
      }}
      bottomDivider
      onPress={() => setIsChecked(!isChecked)}
    />
  );
}
