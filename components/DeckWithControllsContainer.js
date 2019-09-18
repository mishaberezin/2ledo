import React, { useEffect, useState } from 'react';

import DeckWithControlls from './DeckWithControlls';
import { Spinner, withStyles } from 'react-native-ui-kitten';
import { View } from 'react-native';

import api from '../api';

const DeckWithControllsContainer = ({ themedStyle }) => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    api.fetchCards().then(setCards);
  }, []);

  if (!cards) {
    return (
      <View style={themedStyle.loadingContainer}>
        <Spinner size="giant" status="info" />
      </View>
    );
  }

  return <DeckWithControlls items={cards} />;
};

export default withStyles(DeckWithControllsContainer, () => ({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
}));
