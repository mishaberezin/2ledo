import React, { useState, useCallback } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { View, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import FavoritesListHeader from './FavoritesListHeader';
import FavoritesListItem from './FavoritesListItem';
import COLORS from '../constants/appColors';

const FavoritesListContainer = ({
  themedStyle,
  title,
  items,
  withCat,
  onItemPress,
}) => {
  const [opened, setOpened] = useState(false);

  const renderItem = useCallback(
    ({ item }) => (
      <FavoritesListItem
        style={themedStyle.listItemStyle}
        item={item}
        onPress={onItemPress}
      />
    ),
    [onItemPress, themedStyle.listItemStyle]
  );

  return (
    <View
      style={[themedStyle.container, opened && themedStyle.containerOpened]}
    >
      <FavoritesListHeader
        title={title}
        opened={opened}
        withCat={withCat}
        onTogglePress={() => setOpened(!opened)}
      />
      <Collapsible collapsed={!opened} style={themedStyle.listContainer}>
        <FlatList
          keyExtractor={item => '' + item.id}
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={renderItem}
        />
      </Collapsible>
    </View>
  );
};

const LIST_MARGIN = 10;

const FavoritesList = withStyles(FavoritesListContainer, () => ({
  container: {
    justifyContent: 'center',
    allignItems: 'center',
    marginVertical: 10,

    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,

    backgroundColor: '#fff',
    borderColor: COLORS.mainBackgroundColor,
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: LIST_MARGIN,
  },
  containerOpened: {
    paddingBottom: 20,
    backgroundColor: COLORS.mainBackgroundColor,
    height: 'auto',
  },
  listContainer: {},
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
}));

export default FavoritesList;
