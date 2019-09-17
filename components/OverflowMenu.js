import React, { useState } from 'react';
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
    onItemPress(items[index]);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <OverflowMenu
      data={items}
      style={menuContainerStyle}
      visible={menuVisible}
      selectedIndex={selectedIndex}
      onSelect={onItemSelect}
      onBackdropPress={toggleMenu}
    >
      <TouchableOpacity onPress={toggleMenu} style={themedStyle.toggler}>
        {children}
      </TouchableOpacity>
    </OverflowMenu>
  );
};

export default withStyles(OverflowMenuContainer, () => ({
  toggler: {},
}));