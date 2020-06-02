import React, { FC, useEffect } from "react";
import ms from "ms";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@src/redux/store";
import {
  fetchCards,
  DeckStatus,
  selectAllCards,
  likeCard,
  dislikeCard,
} from "@src/redux/slices/deck-slice";
import { DeckWithControlls } from "./deck-with-controlls";

const isRefreshTimeoutGone = (lastFetchedAt: number) => {
  return Date.now() - lastFetchedAt > ms("5 min");
};

interface Props {
  onCardDetails: (id: string) => void;
}

export const DeckWithControllsContainer: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { onCardDetails } = props;
  const { status, lastFetchedAt } = useAppSelector((state) => state.deck);
  const cards = useAppSelector(selectAllCards);

  const isLoading = status === DeckStatus.PENDING;

  useEffect(() => {
    if (cards.length > 3) {
      return;
    }

    if (status === DeckStatus.UNFINISHED) {
      dispatch(fetchCards());
    } else if (
      status === DeckStatus.FINISHED &&
      isRefreshTimeoutGone(lastFetchedAt)
    ) {
      dispatch(fetchCards());
    } else {
      return;
    }
  }, [cards]);

  const onCardLike = (cardId: string) => {
    dispatch(likeCard(cardId));
  };

  const onCardDislike = (cardId: string) => {
    dispatch(dislikeCard(cardId));
  };

  return (
    <DeckWithControlls
      cards={cards}
      isLoading={isLoading}
      onCardLike={onCardLike}
      onCardDislike={onCardDislike}
      onCardDetails={onCardDetails}
    />
  );
};
