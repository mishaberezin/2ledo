import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'react-native-ui-kitten';
import { SCREEN_BACKGROUND } from '../constants/colors';
import { archiveCard } from '../redux/actions/shelfActions';

import FavoritesGroupsList from '../components/FavoritesGroupsList';

const FavoritesScreen = ({ navigation, archiveCard }) => {
  const onItemPress = useCallback(
    id => {
      navigation.navigate({
        routeName: 'CardDetail',
        params: { id },
      });
    },
    [navigation]
  );

  const onItemDelete = useCallback(id => {
    archiveCard(id);
  }, [archiveCard]);

  return (
    <Layout style={styles.container}>
      <FavoritesGroupsList
        onItemPress={onItemPress}
        onItemDelete={onItemDelete}
      />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      archiveCard,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(FavoritesScreen);
