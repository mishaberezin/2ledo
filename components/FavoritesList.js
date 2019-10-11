import React, { useState, useCallback } from 'react';
import { withStyles } from 'react-native-ui-kitten';
import { View, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import FavoritesListHeader from './FavoritesListHeader';
import FavoritesListItem from './FavoritesListItem';
import { MAIN_BACKGROUND_COLOR } from '../constants/colors';

const FavoritesListContainer = ({
  themedStyle,
  title,
  items,
  withCat,
  onItemPress,
}) => {
  const [opened, setOpened] = useState(false);

  const renderItem = useCallback(
    ({ item: { data, id } }) => (
      <FavoritesListItem
        style={themedStyle.listItemStyle}
        item={{ ...data, id }}
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
    borderColor: MAIN_BACKGROUND_COLOR,
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: LIST_MARGIN,
  },
  containerOpened: {
    paddingBottom: 20,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    height: 'auto',
  },
  listContainer: {},
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
}));

export default FavoritesList;
