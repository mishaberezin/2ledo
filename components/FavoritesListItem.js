import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { withStyles, Text } from 'react-native-ui-kitten';

import { Ionicons } from '@expo/vector-icons';

const FavoritesListItemContainer = ({ item, style, onPress, themedStyle }) => {
  return (
    <View style={[style, themedStyle.listItemContainer]}>
      <ScrollView
        style={themedStyle.listItemInfo}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <View style={themedStyle.listItemInfoBlock}>
          <TouchableOpacity onPress={() => onPress(item)}>
            <Image
              source={{ uri: `${item.uri}?b=${Math.random()}` }}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        </View>

        <View style={themedStyle.listItemInfoBlock}>
          <Text category="s1">{item.metro}</Text>
          <Text category="s1">{item.metroDistance} м</Text>
        </View>

        <View style={themedStyle.listItemInfoBlock}>
          <Text category="s1">{item.price} Р</Text>
          <Text category="p1">Жкх включены</Text>
        </View>

        <View style={themedStyle.listItemInfoBlock}>
          <Text category="s1">Что-то еще</Text>
          <Text category="p1">Как-то вот</Text>
        </View>
      </ScrollView>
      <View style={themedStyle.listItemBottomBlock}>
        <View style={themedStyle.listItemBottomTextBlock}>
          <Text category="p2">Бежевые стены, красный диван</Text>
        </View>
        <View style={themedStyle.listItemActions}>
          <Ionicons name="md-more" size={26} color="gray" />
        </View>
      </View>
    </View>
  );
};

const FavoritesListItem = withStyles(FavoritesListItemContainer, () => ({
  listItemContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    minWidth: Dimensions.get('window').width,
  },
  listItemInfo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  listItemInfoBlock: {
    padding: 5,
    flex: 1,
    minWidth: Dimensions.get('window').width / 3,
  },
  listItemBottomBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  listItemBottomTextBlock: {
    flex: 3,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  listItemActions: {
    marginLeft: 10,
    minWidth: 20,
    paddingVertical: 5,
  },
}));

export default FavoritesListItem;
