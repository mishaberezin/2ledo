import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import grid from '../../constants/grid';

export function SettingsCheckbox(props) {
  const { label = 'Лейбл' } = props;
  const { defaultSideMargin } = grid;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListItem
      containerStyle={{
        height: 56,
        paddingLeft: defaultSideMargin,
        paddingRight: defaultSideMargin,
      }}
      title={label}
      checkmark={isChecked}
      bottomDivider
      onPress={() => setIsChecked(!isChecked)}
    />
  );
}
