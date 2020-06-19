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
import { FavsGroupsList } from "./favs-screen/favs-groups-list";
import { fetchFavoritesCards } from "@src/redux/slices/favorites-slice";

import { SCREEN_BACKGROUND } from "@src/constants/colors";

type Props = StackScreenProps<MainStackParamList, "Favs">;

export const FavsScreen: FC<Props> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { status } = useAppSelector((state) => state.favorites);
  const cards = useAppSelector(selectAllFavoriteCards);
  console.log('cards::', cards);
  useEffect(() => {
    if (status === FavoritesStatus.UNFINISHED) {
      dispatch(fetchFavoritesCards());
    } else if (
      status === FavoritesStatus.FINISHED
    ) {
      dispatch(fetchFavoritesCards());
    } else {
      return;
    }
  }, [cards]);

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
      <FavsGroupsList onItemPress={onItemPress} onItemDelete={onItemDelete} />
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
