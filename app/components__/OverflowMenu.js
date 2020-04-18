import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { OverflowMenu, withStyles } from 'react-native-ui-kitten';
import { TouchableOpacity } from 'react-native';

const OverflowMenuContainer = ({
  items = [],
  onItemPress,
  menuContainerStyle,
  children,
  themedStyle,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  // todo подумать нужно ли это вообще
  const [selectedIndex] = useState();

  const onItemSelect = index => {
    //setSelectedIndex(index);
    setMenuVisible(false);
    onItemPress && onItemPress(items[index]);
  };

  const toggleMenu = useCallback(() => {
    if (items.length) {
      setMenuVisible(!menuVisible);
    }
  }, [items.length, menuVisible]);

  return (
    <View style={[themedStyle.container, menuContainerStyle]}>
      <OverflowMenu
        data={items}
        visible={menuVisible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={toggleMenu}
      >
        <TouchableOpacity onPress={toggleMenu} style={themedStyle.toggler}>
          {children}
        </TouchableOpacity>
      </OverflowMenu>
    </View>
  );
};

export default withStyles(OverflowMenuContainer, () => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
}));
