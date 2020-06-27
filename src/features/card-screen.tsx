import React, { FC } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "@src/navigation";
import { View, StyleSheet } from "react-native";
import { selectCardById, selectFavoriteCardById } from "@src/redux/slices";
import { useAppSelector } from "@src/redux/store";
import { Spinner } from "@ui-kitten/components";
import { ItemDetailCard } from "@src/components/card";

type Props = StackScreenProps<MainStackParamList, "Card">;

export const CardScreen: FC<Props> = (props) => {
  const { route } = props;
  const cardId = route.params.id;

  const deckCard = useAppSelector((state) => selectCardById(state, cardId));
  const favoriteCard = useAppSelector((state) =>
    selectFavoriteCardById(state, cardId)
  );

  // TODO: Переделать на единый слайс с карточками
  const card = deckCard || favoriteCard;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {card ? <ItemDetailCard card={card} /> : <Spinner size="giant" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
