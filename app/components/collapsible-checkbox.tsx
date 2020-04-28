import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { DEFAULT_SIDE_MARGIN } from '@app/constants/layout';
import {
  SETTINGS_DIVIDER_COLOR,
  TEXT_COLOR,
  SUBTITLE_COLOR,
} from '@app/constants/colors';

export const CollapsibleCheckbox = (props) => {
  const { listItemProps, collapsibleProps, children, checked = false } = props;

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
        containerStyle={[
          {
            height: listItemProps.subtitle ? 76 : 56,
            paddingLeft: DEFAULT_SIDE_MARGIN,
            paddingRight: DEFAULT_SIDE_MARGIN,
            backgroundColor: 'transparent',
          },
          !collapsed && {
            borderColor: SETTINGS_DIVIDER_COLOR,
            borderStyle: 'solid',
            borderBottomWidth: 1,
          },
        ]}
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
        leftIcon={{
          type: 'ionicon',
          name: !collapsed
            ? 'ios-checkmark-circle'
            : 'ios-checkmark-circle-outline',
          color: TEXT_COLOR,
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
        <View
          style={{
            backgroundColor: '#FFF',
            paddingTop: 18,
            paddingBottom: 18,
          }}
        >
          {children}
        </View>
      </Collapsible>
    </View>
  );
};
