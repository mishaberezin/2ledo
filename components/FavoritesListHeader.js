import React, { useCallback } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons';
import PlateHeader from './PlateHeader';

const FavoritesListHeaderContainer = ({ title, opened, onTogglePress }) => {
  const handleToggle = useCallback(onTogglePress, [opened]);

  return (
    <PlateHeader opened={opened} title={title} onTogglePress={handleToggle}>
      <Ionicons name="md-more" size={32} color="gray" />
    </PlateHeader>
  );
};

const FavoritesListHeader = withStyles(FavoritesListHeaderContainer, () => ({
  // empty
}));

export default FavoritesListHeader;
