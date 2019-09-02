import React, { useCallback } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import PlateHeader from './PlateHeader';

const FavoritesListHeaderContainer = ({
  title,
  opened,
  onTogglePress,
  themedStyle,
  withCat,
}) => {
  const handleToggle = useCallback(onTogglePress, [opened]);

  return (
    <PlateHeader
      opened={opened}
      title={title}
      onTogglePress={handleToggle}
      withCat={withCat}
    >
      <Ionicons
        style={themedStyle.iconMore}
        name="md-more"
        size={32}
        color="gray"
      />
    </PlateHeader>
  );
};

const FavoritesListHeader = withStyles(FavoritesListHeaderContainer, () => ({
  iconMore: {},
}));

export default FavoritesListHeader;
