import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Layout } from '@ui-kitten/components';
import { archiveCard } from '@app/redux/actions/shelf-actions';
import { FavsGroupsList } from './favs/favs-groups-list';

import { SCREEN_BACKGROUND } from '@app/constants/colors';

export const FavsScreen = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const onItemPress = useCallback(
    (id) => {
      navigation.navigate('Card', { id });
    },
    [navigation],
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
