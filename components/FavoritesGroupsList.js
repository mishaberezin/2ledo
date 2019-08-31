import React from 'react';
import { ScrollView, View } from 'react-native';

import FavoritesList from '../components/FavoritesList';

const FavoritesGroupsList = ({ groups, withScroll }) => {
  const list = groups.map(group => (
    <FavoritesList key={group.title} title={group.title} items={group.items} />
  ));

  return withScroll ? <ScrollView>{list}</ScrollView> : <View>{list}</View>;
};

export default FavoritesGroupsList;
