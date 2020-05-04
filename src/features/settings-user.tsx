import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserProp } from '@src/redux/slices';
import { View } from 'react-native';
import { SchemaUserSettings } from './settings/schema-user-settings';

export function SettingsUser(props) {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FCFBFF',
        paddingTop: 10,
      }}
    >
      <SchemaUserSettings
        data={data}
        onChange={(data) => {
          dispatch(setUserProp(data));
        }}
      />
    </View>
  );
}
