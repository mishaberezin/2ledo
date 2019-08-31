import React from 'react';
import { ScrollView } from 'react-native';

import FavoritesList from '../components/FavoritesList';

const FavoritesGroupsList = ({ groups }) => {
  return (
    <ScrollView>
      {groups.map(group => (
        <FavoritesList
          key={group.title}
          title={group.title}
          items={group.items}
        />
      ))}
    </ScrollView>
  );
};

export default FavoritesGroupsList;
