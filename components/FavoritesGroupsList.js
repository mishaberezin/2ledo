import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FavoritesList from '../components/FavoritesList';

const FavoritesGroupsList = ({ groups, onItemPress, onItemDelete }) => {
  return (
    <ScrollView>
      <FavoritesList
        title="Да"
        items={groups.liked}
        onItemPress={onItemPress}
        onItemDelete={onItemDelete}
        withCat
      />
      <FavoritesList
        title="Нет"
        items={groups.disliked}
        onItemDelete={onItemDelete}
        withCat
      />
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  groups: state.shelf,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesGroupsList);
