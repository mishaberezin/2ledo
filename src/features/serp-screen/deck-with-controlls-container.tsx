import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { DeckWithControlls } from './deck-with-controlls';
import { requestCards, likeCard, dislikeCard } from '@src/redux/slices';
import { AppState } from '@src/redux/store';

export const DeckWithControllsContainer = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: AppState) => state.deck);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(requestCards());
      setIsLoading(false);
    })();
  }, []);

  // Нужно начинать загружать раньше.
  const onLastCard = async () => {
    setIsLoading(true);
    await dispatch(requestCards());
    setIsLoading(false);
  };

  const onSwipe = useCallback(
    (cardId, direction) => {
      if (direction === 'right') {
        dispatch(likeCard(cardId));
      } else {
        dispatch(dislikeCard(cardId));
      }
    },
    [dispatch, dislikeCard, likeCard]
  );

  return (
    <Fragment>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      <DeckWithControlls
        cards={cards}
        onLastCard={onLastCard}
        onSwipe={onSwipe}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
