import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text } from 'react-native';
import { DeckWithControlls } from './deck-with-controlls';
import { requestCards, likeCard, dislikeCard } from '../redux/slices';

const DeckWithControllsContainerBare = ({
  cards,
  requestCards,
  likeCard,
  dislikeCard,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await requestCards();
      setIsLoading(false);
    })();
  }, [requestCards]);

  const onLastCard = async (offset) => {
    setIsLoading(true);
    await requestCards(offset);
    setIsLoading(false);
  };

  const onSwipe = useCallback(
    (cardId, direction) => {
      if (direction === 'right') {
        likeCard(cardId);
      } else {
        dislikeCard(cardId);
      }
    },
    [dislikeCard, likeCard]
  );

  return (
    <Fragment>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <Text>Loading...</Text>
        </View>
      )}
      <DeckWithControlls
        items={cards}
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

const mapStateToProps = (state) => {
  return {
    cards: state.deck,
  };
};
const mapDispatchToProps = (dispath) =>
  bindActionCreators({ requestCards, likeCard, dislikeCard }, dispath);

export const DeckWithControllsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckWithControllsContainerBare);
