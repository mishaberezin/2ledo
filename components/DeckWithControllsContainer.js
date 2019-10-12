import React, { useCallback, useEffect, useState } from 'react';

import { Spinner, withStyles } from 'react-native-ui-kitten';
import { View } from 'react-native';
import DeckWithControlls from './DeckWithControlls';
import { requestCards } from '../redux/actions/cardActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { likeCard, dislikeCard } from '../redux/actions/shelfActions';

const DeckWithControllsContainer = ({
  cards,
  requestCards,
  likeCard,
  dislikeCard,
  themedStyle,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await requestCards();
      setIsLoading(false);
    })();
  }, [requestCards]);

  const onLastCard = async offset => {
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
    <React.Fragment>
      {isLoading && (
        <View style={themedStyle.loader}>
          <Spinner size="giant" status="info" />
        </View>
      )}
      <DeckWithControlls
        items={cards}
        onLastCard={onLastCard}
        onSwipe={onSwipe}
      />
    </React.Fragment>
  );
};

const StyledDeckWithControlls = withStyles(DeckWithControllsContainer, () => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  loader: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
}));

const mapStateToProps = state => {
  return {
    cards: state.deck,
  };
};
const mapDispatchToProps = dispath =>
  bindActionCreators({ requestCards, likeCard, dislikeCard }, dispath);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledDeckWithControlls);
