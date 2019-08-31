import React, { useCallback, useState } from 'react';
import { withStyles } from 'react-native-ui-kitten';

import PlateWithList from './PlateWithList';

import FavoritesListItem from './FavoritesListItem';
import FavoritesListHeader from './FavoritesListHeader';

const FavoritesListContainer = ({ title, items, themedStyle }) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => setOpened(!opened);

  const renderItem = useCallback(
    ({ item }) => (
      <FavoritesListItem style={themedStyle.listItemStyle} item={item} />
    ),
    [themedStyle.listItemStyle]
  );

  return (
    <PlateWithList
      items={items}
      renderItem={renderItem}
      opened={opened}
      headerComponent={
        <FavoritesListHeader
          title={title}
          opened={opened}
          onTogglePress={handleToggle}
        />
      }
      headerComponentStyle={themedStyle.headerContainer}
    />
  );
};

const LIST_MARGIN = 10;

const FavoritesList = withStyles(FavoritesListContainer, () => ({
  container: {
    justifyContent: 'center',
    allignItems: 'center',
    marginVertical: 10,
  },
  headerContainer: {
    height: 50,
    marginHorizontal: LIST_MARGIN,
  },
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
}));

export default FavoritesList;
