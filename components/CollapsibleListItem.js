import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { DEFAULT_SIDE_MARGIN } from '@toledo/constants/layout';
import {
  SETTINGS_DIVIDER_COLOR,
  TEXT_COLOR,
  SUBTITLE_COLOR,
} from '@toledo/constants/colors';

export const CollapsibleListItem = props => {
  const { listItemProps, collapsibleProps, children } = props;

  const [collapsed, setCollapsed] = useState(true);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderColor: SETTINGS_DIVIDER_COLOR,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      <ListItem
        containerStyle={{
          height: listItemProps.subtitle ? 76 : 56,
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
        chevron={{
          name: collapsed ? 'chevron-down' : 'chevron-up',
          type: 'feather',
          color: 'black',
        }}
        onPress={() => setCollapsed(!collapsed)}
        {...listItemProps}
      />
      <Collapsible
        style={{
          paddingLeft: DEFAULT_SIDE_MARGIN,
          paddingRight: DEFAULT_SIDE_MARGIN,
        }}
        {...collapsibleProps}
        collapsed={collapsed}
      >
        {children}
      </Collapsible>
    </View>
  );
};
