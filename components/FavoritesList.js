import React, { useCallback, useMemo } from 'react';
import { List, withStyles } from 'react-native-ui-kitten';
import { View } from 'react-native';

import FavoritesListItem from './FavoritesListItem';

const FavoritesListContainer = ({ items, themedStyle }) => {
  const renderItem = useCallback(({ item }) => {
    return <FavoritesListItem item={item} />;
  }, []);

  const listRef = useMemo(() => React.createRef(), []);

  const handleListContentSizeChange = useCallback(() => {
    setTimeout(() => listRef.current.scrollToEnd({ animated: true }), 0);
  }, [listRef]);

  return (
    <View style={themedStyle.container}>
      <List
        ref={listRef}
        contentContainerStyle={themedStyle.listContainer}
        onContentSizeChange={handleListContentSizeChange}
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
};

const FavoritesList = withStyles(FavoritesListContainer, () => ({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    backgroundColor: 'violet',
    paddingVertical: 20,
    borderRadius: 10,
    // maxWidth: Dimensions.get('window').width - 30,
  },
}));

export default FavoritesList;
