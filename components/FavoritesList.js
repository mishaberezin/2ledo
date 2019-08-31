import React, { useCallback, useState } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { View, FlatList } from 'react-native';

import FavoritesListItem from './FavoritesListItem';
import FavoritesListHeader from './FavoritesListHeader';
import Colors from '../constants/Colors';

const FavoritesListContainer = ({ title, items, themedStyle }) => {
  const [listItems, setListItems] = useState([]);

  const handleToggle = () => setListItems(listItems.length ? [] : items);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <FavoritesListItem style={themedStyle.listItemStyle} item={item} />
      );
    },
    [themedStyle.listItemStyle]
  );

  const contentContainerStyle = [
    themedStyle.listContainer,
    listItems.length && themedStyle.listContainerOpened,
  ];

  return (
    <View style={themedStyle.container}>
      <FlatList
        keyExtractor={item => '' + item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <FavoritesListHeader
            title={title}
            opened={listItems.length > 0}
            onTogglePress={handleToggle}
          />
        }
        ListHeaderComponentStyle={themedStyle.headerContainer}
        contentContainerStyle={contentContainerStyle}
        data={listItems}
        renderItem={renderItem}
      />
    </View>
  );
};

const LIST_MARGIN = 10;

const FavoritesList = withStyles(FavoritesListContainer, () => ({
  container: {
    justifyContent: 'center',
    allignItems: 'center',
    marginBottom: 10,
  },
  listContainer: {
    backgroundColor: Colors.mainBackgroundColor,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: LIST_MARGIN,
    marginRight: LIST_MARGIN,
  },
  headerContainer: {
    height: 50,
    marginHorizontal: LIST_MARGIN,
  },
  listContainerOpened: {
    paddingBottom: 20,
  },
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
}));

export default FavoritesList;
