import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { DEFAULT_SIDE_MARGIN } from '@app/constants/layout';
import { TEXT_COLOR } from '@app/constants/colors';

export function SettingsCheckbox(props) {
  const { label = 'Лейбл' } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <ListItem
      containerStyle={{
        height: 56,
        paddingLeft: DEFAULT_SIDE_MARGIN,
        paddingRight: DEFAULT_SIDE_MARGIN,
      }}
      title={label}
      checkmark={{
        type: 'ionicon',
        name: isChecked
          ? 'ios-checkmark-circle'
          : 'ios-checkmark-circle-outline',
        color: TEXT_COLOR,
      }}
      bottomDivider
      onPress={() => setIsChecked(!isChecked)}
    />
  );
}
