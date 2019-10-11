import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FavoritesList from '../components/FavoritesList';

const FavoritesGroupsList = ({ groups, onItemPress }) => {
  return (
    <ScrollView>
      <FavoritesList
        title="Да"
        items={groups.liked}
        onItemPress={onItemPress}
        withCat
      />
      <FavoritesList
        title="Подумаю"
        items={groups.think}
        onItemPress={onItemPress}
        withCat
      />
      <FavoritesList
        title="Нет"
        items={groups.disliked}
        onItemPress={onItemPress}
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
