import React, { useCallback } from "react";
import { useStyleSheet, StyleService, Text } from "@ui-kitten/components";
import { View, FlatList } from "react-native";
import { FavsListHostItem } from "./favs-list-host-item";
import { ApartmentFavoriteCard } from "@src/redux/slices/favorites-slice";

const FavoritesList = ({
  isLoading,
  items,
  onItemPress,
  onItemDelete,
}) => {
  const styles = useStyleSheet(themedStyles);
  const renderItem = useCallback(
    ({ item }: { item: ApartmentFavoriteCard }) => {
      return (
        <FavsListHostItem
          style={styles.listItemStyle}
          itemId={item.apartment.id}
          item={item.apartment.data}
          onPress={onItemPress}
          onDelete={onItemDelete}
        />
      );
    },
    [onItemDelete, onItemPress, styles.listItemStyle]
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.listIsEmptyContainer}>
          <Text>Загружаем...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {items.length > 0 ? (
        <FlatList
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={renderItem}
        />
      ) : (
          <View style={styles.listIsEmptyContainer}>
            <Text>Тут пока ничего нет</Text>
          </View>
        )}
    </View>
  );
};

const LIST_MARGIN = 10;

const themedStyles = StyleService.create(
  {
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
  }
);

export default FavoritesList;

