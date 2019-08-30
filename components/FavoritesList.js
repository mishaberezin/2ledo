import React, { useCallback, useState } from 'react';
import { List, withStyles } from 'react-native-ui-kitten';
import { View } from 'react-native';

import FavoritesListItem from './FavoritesListItem';
import FavoritesListHeader from './FavoritesListHeader';
import Colors from '../constants/Colors';

const FavoritesListContainer = ({ title, items, themedStyle }) => {
  const [opened, setOpened] = useState(false);

  const handleToggle = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const renderItem = useCallback(
    ({ item, index }) => {
      if (index === 0) {
        return (
          <FavoritesListHeader
            title={title}
            opened={opened}
            style={themedStyle.listHeaderStyle}
            onTogglePress={handleToggle}
          />
        );
      }
      return (
        <FavoritesListItem style={themedStyle.listItemStyle} item={item} />
      );
    },
    [
      themedStyle.listItemStyle,
      themedStyle.listHeaderStyle,
      title,
      opened,
      handleToggle,
    ]
  );

  const data = opened ? [null, ...items] : [null];

  const contentContainerStyle = [
    themedStyle.listContainer,
    opened && themedStyle.listContainerOpened,
  ];

  return (
    <View style={themedStyle.container}>
      <List
        contentContainerStyle={contentContainerStyle}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const LIST_MARGIN = 10;

const FavoritesList = withStyles(FavoritesListContainer, () => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    allignItems: 'center',
  },
  listContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    borderRadius: 20,
    marginLeft: LIST_MARGIN,
    marginRight: LIST_MARGIN,
  },
  listContainerOpened: {
    paddingBottom: 20,
  },
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
  listHeaderStyle: {
    paddingHorizontal: LIST_MARGIN,
    paddingVertical: 5,
  },
}));

export default FavoritesList;
