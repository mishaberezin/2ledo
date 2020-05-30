import React, { useState, useCallback } from "react";
import { withStyles, Text } from "@ui-kitten/components";
import { View, FlatList } from "react-native";
import Collapsible from "react-native-collapsible";
import { FavsListHeader } from "./favs-list-header";
import { FavsListHostItem } from "./favs-list-host-item";

import { MAIN_BACKGROUND_COLOR } from "@src/constants/colors";

const FavsListContainer = ({
  eva: { style: themedStyle },
  title,
  items,
  withCat,
  onItemPress,
  onItemDelete,
}) => {
  const [opened, setOpened] = useState(false);

  const renderItem = useCallback(
    ({ item: { data, id, Type } }) => {
      if (Type === "host") {
        return (
          <FavsListHostItem
            style={themedStyle.listItemStyle}
            item={{ ...data, id }}
            onPress={onItemPress}
            onDelete={onItemDelete}
          />
        );
      } else {
        return null;
      }
    },
    [onItemDelete, onItemPress, themedStyle.listItemStyle]
  );

  return (
    <View
      style={[themedStyle.container, opened && themedStyle.containerOpened]}
    >
      <FavsListHeader
        title={title}
        opened={opened}
        withCat={withCat}
        onTogglePress={() => setOpened(!opened)}
      />
      <Collapsible collapsed={!opened} style={themedStyle.listContainer}>
        {items.length > 0 ? (
          <FlatList
            keyExtractor={(item) => "" + item.id}
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={renderItem}
          />
        ) : (
          <View style={themedStyle.listIsEmptyContainer}>
            <Text>Тут пока ничего нет</Text>
          </View>
        )}
      </Collapsible>
    </View>
  );
};

const LIST_MARGIN = 10;

export const FavsList = withStyles(FavsListContainer, () => ({
  container: {
    justifyContent: "center",
    allignItems: "center",
    marginVertical: 10,

    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,

    backgroundColor: "#fff",
    borderColor: MAIN_BACKGROUND_COLOR,
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: LIST_MARGIN,
  },
  containerOpened: {
    paddingBottom: 20,
    backgroundColor: MAIN_BACKGROUND_COLOR,
    height: "auto",
  },
  listIsEmptyContainer: {
    padding: 20,
  },
  listItemStyle: {
    transform: [{ translateX: -LIST_MARGIN }],
  },
}));
