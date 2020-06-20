import React, { useState, useCallback } from "react";
import { withStyles, Text } from "@ui-kitten/components";
import { View, FlatList } from "react-native";
import { FavsListHostItem } from "./favs-list-host-item";
import { ApartmentFavoriteCard } from "@src/redux/slices/favorites-slice";

import { MAIN_BACKGROUND_COLOR } from "@src/constants/colors";

const FavoritesListContainer = ({
  isLoading,
  eva: { style: themedStyle },
  items,
  onItemPress,
  onItemDelete,
}) => {

  const renderItem = useCallback(
    ({ item }: { item: ApartmentFavoriteCard }) => {
      return (
        <FavsListHostItem
          style={themedStyle.listItemStyle}
          itemId={item.apartment.id}
          item={item.apartment.data}
          onPress={onItemPress}
          onDelete={onItemDelete}
        />
      );
    },
    [onItemDelete, onItemPress, themedStyle.listItemStyle]
  );

  if (isLoading) {
    <View style={themedStyle.container}>
      <View style={themedStyle.listIsEmptyContainer}>
        <Text>Загружаем...</Text>
      </View>
    </View>
  }

  return (
    <View style={themedStyle.container}>
      {items.length > 0 ? (
        <FlatList
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={renderItem}
        />
      ) : (
          <View style={themedStyle.listIsEmptyContainer}>
            <Text>Тут пока ничего нет</Text>
          </View>
        )}
    </View>
  );
};

const LIST_MARGIN = 10;

export const FavoritesList = withStyles(FavoritesListContainer, () => ({
  container: {
    justifyContent: "center",
    allignItems: "center",
    marginVertical: 10,

    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,

    marginHorizontal: LIST_MARGIN,
  },
  listIsEmptyContainer: {
    padding: 20,
  },
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
}));
