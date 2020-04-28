import React, { useCallback } from 'react';
import { View } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import PlateHeader from './PlateHeader';
import OverflowMenu from './OverflowMenu';

const FavoritesListHeaderContainer = ({
  title,
  opened,
  onTogglePress,
  withCat,
  themedStyle,
}) => {
  const handleToggle = useCallback(onTogglePress, [opened]);

  return (
    <PlateHeader
      opened={opened}
      title={title}
      onTogglePress={handleToggle}
      withCat={withCat}
    >
      <OverflowMenu>
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
  overflowMenu: {
    position: 'relative',
    top: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
}));

export default FavoritesListHeader;
