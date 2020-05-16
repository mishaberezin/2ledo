import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { getDetailCard } from '@src/redux/slices';

import { Spinner } from '@ui-kitten/components';
import { ItemDetailCard } from '@src/components/card';

export function Card(props) {
  const { route } = props;
  const itemId = route.params.id;
  const dispatch = useDispatch();

  const [card, setCard] = useState();
  useEffect(() => {
    (async () => {
      const card = await dispatch(getDetailCard(itemId));
      setCard(card);
    })();
  }, [getDetailCard, itemId]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {card ? <ItemDetailCard card={card} /> : <Spinner size="giant" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
});
