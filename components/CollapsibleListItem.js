import React from 'react';
// import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import grid from '../constants/grid';
// import colors from '../constants/grid';

export const CollapsibleListItem = props => {
  const { listItemProps, collapsibleProps, children } = props;
  // const { labelTextColor } = colors;
  const { defaultSideMargin } = grid;

  // const [collapsed, setCollapsed] = useState(true);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        borderColor: '#979797',
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
          color: 'black',
          fontFamily: 'ceracy-desktop-medium',
          fontSize: 13,
          lineHeight: 18,
        }}
        {...listItemProps}
      />
      <Collapsible {...collapsibleProps}>{children}</Collapsible>
    </View>
  );
};
