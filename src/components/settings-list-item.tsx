import React from 'react';
import { ListItem } from 'react-native-elements';
import { DEFAULT_SIDE_MARGIN } from '@src/constants/layout';
import { TEXT_COLOR, SUBTITLE_COLOR } from '@src/constants/colors';

export const SettingsListItem = (props) => {
  return (
    <ListItem
      containerStyle={{
        height: props.subtitle ? 76 : 56,
        paddingLeft: DEFAULT_SIDE_MARGIN,
        paddingRight: DEFAULT_SIDE_MARGIN,
        backgroundColor: 'transparent',
      }}
      titleStyle={{
        color: TEXT_COLOR,
        fontFamily: 'ceracy-desktop-medium',
        fontSize: 15,
        lineHeight: 18,
      }}
      subtitleStyle={{
        color: SUBTITLE_COLOR,
        fontFamily: 'ceracy-desktop-medium',
        fontSize: 13,
        lineHeight: 18,
      }}
      contentContainerStyle={{
        flexDirection: 'column-reverse',
      }}
      {...props}
    />
  );
};
