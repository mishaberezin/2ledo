import React from 'react';
import { ListItem } from 'react-native-elements';
import grid from '../../constants/grid';
import colors from '../../constants/colors';

export function SettingsTextLabel(props) {
  const { label } = props;
  const { defaultSideMargin } = grid;
  const { labelTextColor } = colors;

  return (
    <ListItem
      containerStyle={{
        height: 56,
        paddingLeft: defaultSideMargin,
        paddingRight: defaultSideMargin,
        backgroundColor: 'transparent',
      }}
      title={label}
      titleStyle={{
        color: labelTextColor,
        fontFamily: 'ceracy-desktop-medium',
        fontSize: 13,
        lineHeight: 18,
      }}
      bottomDivider
    />
  );
}
