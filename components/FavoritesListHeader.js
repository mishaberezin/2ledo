import React, { useCallback } from 'react';
import { View } from 'react-native';
import { withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import PlateHeader from './PlateHeader';
import OverflowMenu from './OverflowMenu';

const FavoritesListHeaderContainer = ({
  title,
  opened,
  onTogglePress,
  themedStyle,
  withCat,
}) => {
  const handleToggle = useCallback(onTogglePress, [opened]);

  const menuItems = [
    { type: 'view', title: 'Просмотр' },
    { type: 'delete', title: 'Удалить' },
  ];

  const handleItemPress = useCallback((/*item*/) => {
    //console.log('item');
  }, []);

  return (
    <PlateHeader
      opened={opened}
      title={title}
      onTogglePress={handleToggle}
      withCat={withCat}
    >
      <OverflowMenu items={menuItems} onItemPress={handleItemPress}>
        <View style={themedStyle.iconMore}>
          <Ionicons name="md-more" size={32} color="gray" />
        </View>
      </OverflowMenu>
    </PlateHeader>
  );
};

const FavoritesListHeader = withStyles(FavoritesListHeaderContainer, () => ({
  iconMore: {
    display: 'flex',
    alignItems: 'center',
    width: 40,
  },
}));

export default FavoritesListHeader;
