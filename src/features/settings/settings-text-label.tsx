import React from 'react';
import { ListItem } from 'react-native-elements';
import { DEFAULT_SIDE_MARGIN } from '@src/constants/layout';
import { LABEL_TEXT_COLOR } from '@src/constants/colors';

export function SettingsTextLabel(props) {
  const { label } = props;

  return (
    <ListItem
      containerStyle={{
        height: 56,
        paddingLeft: DEFAULT_SIDE_MARGIN,
        paddingRight: DEFAULT_SIDE_MARGIN,
        backgroundColor: 'transparent',
      }}
      title={label}
      titleStyle={{
        color: LABEL_TEXT_COLOR,
        fontFamily: 'ceracy-desktop-medium',
        fontSize: 13,
        lineHeight: 18,
      }}
      bottomDivider
    />
  );
}
