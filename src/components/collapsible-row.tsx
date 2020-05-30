import React, { useState } from 'react';
// import debounce from 'lodash/debounce';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { withStyles } from '@ui-kitten/components';
import Collapsible from 'react-native-collapsible';

const CollapsibleRowContainer = ({ children, title, rowHeight, eva: { style }, onOpenClose }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [blockClosedY, setBlockClosedY] = useState(null);
  const [blockOpenedY, setBlockOpenedY] = useState(null);

  const debouncedSetBlockOpenedY = setBlockOpenedY;

  const handleLayout = ({
    nativeEvent: { layout: { y, height } },
  }) => {
    const maxHeight = height + y + children.length * rowHeight;

    if (!blockClosedY) {
      setBlockClosedY(height + y);
    }
    if (!collapsed && blockOpenedY !== maxHeight) {
      debouncedSetBlockOpenedY(height + y);
    } else if (collapsed && blockOpenedY === null) {
      setBlockOpenedY(maxHeight);
    }
  };

  const handlePress = () => {
    setCollapsed(!collapsed);
    const blockPosY = collapsed ? blockOpenedY : blockClosedY;
    setTimeout(() => onOpenClose(collapsed, blockPosY), 100);
  };

  return (
    <View onLayout={handleLayout}>
      <Button
        buttonStyle={style.button}
        titleStyle={style.title}
        type="clear"
        icon={
          <AntDesign name={collapsed ? 'down' : 'up'} size={24} color={style.icon.color} />
        }
        iconRight={true}
        title={title}
        onPress={handlePress}
      />
      <Collapsible collapsed={collapsed}>
        {children}
      </Collapsible>
    </View>
  );
};

export const CollapsibleRow = withStyles(CollapsibleRowContainer, () => ({
  block: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(120, 121, 147, 0.1)',
    backgroundColor: '#fafaff',
    flexDirection: 'row',
  },
  title: {
    color: '#25265E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    height: 66,
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingRight: 35,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(120, 121, 147, 0.1)',
    backgroundColor: '#fafaff',
    flexDirection: 'row',
  },
  icon: {
    color: 'rgb(163, 163, 241)'
  }
}))
