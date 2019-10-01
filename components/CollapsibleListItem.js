import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import grid from '../constants/grid';
import colors from '../constants/colors';

export const CollapsibleListItem = props => {
  const { listItemProps, collapsibleProps, children } = props;
  const { settingsDividerColor, darkTextColor } = colors;
  const { defaultSideMargin } = grid;

  const [collapsed, setCollapsed] = useState(true);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderColor: settingsDividerColor,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      <ListItem
        containerStyle={{
          height: 56,
          paddingLeft: defaultSideMargin,
          paddingRight: defaultSideMargin,
          backgroundColor: 'transparent',
        }}
        titleStyle={{
          color: darkTextColor,
          fontFamily: 'ceracy-desktop-medium',
          fontSize: 15,
          lineHeight: 18,
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
          paddingLeft: defaultSideMargin,
          paddingRight: defaultSideMargin,
        }}
        {...collapsibleProps}
        collapsed={collapsed}
      >
        {children}
      </Collapsible>
    </View>
  );
};
