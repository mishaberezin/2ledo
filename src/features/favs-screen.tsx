import React, { FC, useCallback, useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "@src/navigation";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Layout } from "@ui-kitten/components";
import { useAppSelector } from "@src/redux/store";
import { archiveCard } from "@src/redux/slices";
import {
  FavoritesStatus,
  selectAllFavoriteCards,
} from "@src/redux/slices/favorites-slice";

import { FavoritesList } from "./favs-screen/favorites-list";
import { fetchFavoritesCards } from "@src/redux/slices/favorites-slice";

import { SCREEN_BACKGROUND } from "@src/constants/colors";

type Props = StackScreenProps<MainStackParamList, "Favs">;

export const FavsScreen: FC<Props> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { status } = useAppSelector((state) => state.favorites);
  const isLoading = status === FavoritesStatus.PENDING;

  const cards = useAppSelector(selectAllFavoriteCards);

  useEffect(() => {
    dispatch(fetchFavoritesCards());
  }, []);

  const onItemPress = useCallback(
    (id) => {
      navigation.navigate("Card", { id });
    },
    [navigation]
  );

  const onItemDelete = (id) => {
    dispatch(archiveCard(id));
  };

  return (
    <Layout style={styles.container}>
      <FavoritesList
        isLoading={isLoading}
        items={cards}
        onItemPress={onItemPress}
        onItemDelete={onItemDelete}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: SCREEN_BACKGROUND,
  },
});
