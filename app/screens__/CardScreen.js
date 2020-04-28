import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getShelfCard } from '../redux/actions/shelfActions';

import { Spinner } from '@ui-kitten/components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ItemDetailCard } from '../components/Card';

function CardScreen(props) {
  const { navigation, getShelfCard } = props;
  const itemId = navigation.getParam('id');

  const [card, setCard] = useState();

  useEffect(() => {
    (async () => {
      const card = await getShelfCard(itemId);
      setCard(card);
    })();
  }, [getShelfCard, itemId]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {card ? <ItemDetailCard card={card.data} /> : <Spinner size="giant" />}
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

const mapStateToProps = (dispatch) =>
  bindActionCreators(
    {
      getShelfCard,
    },
    dispatch,
  );

export default connect(null, mapStateToProps)(CardScreen);
