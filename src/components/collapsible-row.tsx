import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

export const CollapsibleRow = props => {
  const { children, title } = props;
  const [collapsed, setCollapsed] = useState(true);

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
      <Button
        buttonStyle={{
          height: 56,
          justifyContent: 'space-between',
        }}
        titleStyle={{
          color: '#25265E',
        }}
        type="clear"
        icon={
          <AntDesign name={collapsed ? 'down' : 'up'} size={15} color="black" />
        }
        iconRight={true}
        title={title}
        onPress={() => setCollapsed(!collapsed)}
      />
      <Collapsible collapsed={collapsed}>{children}</Collapsible>
    </View>
  );
};
