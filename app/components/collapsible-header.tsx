import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import { ToledoHeader5 } from './toledo-header-5';
import Collapsible from 'react-native-collapsible';
// import { DEFAULT_SIDE_MARGIN } from '@app/constants/layout';
import { SETTINGS_DIVIDER_COLOR } from '@app/constants/colors';

export const CollapsibleHeader = (props) => {
  const {
    title,
    collapsibleProps,
    children,
    listItemProps,
    checked = false,
  } = props;

  const [collapsed, setCollapsed] = useState(!checked);

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
        title={<ToledoHeader5>{title}</ToledoHeader5>}
        containerStyle={{
          height: 56,
          backgroundColor: 'transparent',
        }}
        // titleStyle={{
        //   color: TEXT_COLOR,
        //   fontFamily: 'ceracy-desktop-medium',
        //   fontSize: 15,
        //   lineHeight: 18,
        // }}
        // contentContainerStyle={{
        //   flexDirection: 'column-reverse',
        // }}
        chevron={{
          name: collapsed ? 'chevron-down' : 'chevron-up',
          type: 'feather',
          color: 'black',
        }}
        onPress={() => setCollapsed(!collapsed)}
        {...listItemProps}
      />
      <Collapsible {...collapsibleProps} collapsed={collapsed}>
        {children}
      </Collapsible>
    </View>
  );
};
