import React from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { FavsList } from "./favs-list";

export const FavsGroupsList = ({ onItemPress, onItemDelete }) => {
  const shelf = useSelector((state) => state.shelf);

  return (
    <ScrollView>
      <FavsList
        title="Да"
        items={shelf.liked}
        onItemPress={onItemPress}
        onItemDelete={onItemDelete}
      />
      <FavsList
        title="Нет"
        items={shelf.disliked}
        onItemDelete={onItemDelete}
      />
    </ScrollView>
  );
};
