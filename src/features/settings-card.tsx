import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardProp } from '@src/redux/slices';
import { View } from 'react-native';

import { MAIN_BRIGHT } from '@src/constants/colors';

import { SchemaTenantCardSettings } from './settings/schema-tenant-card-settings';
import { SchemaHostCardSettings } from './settings/schema-host-card-settings';

export const SettingsCard = (props) => {
  const { type, data, id } = useSelector(
    (state) => state.cards[state.localState?.currentCardId]
  );
  const dispatch = useDispatch();

  let SchemaComponent;
  if (type === 'tenant') {
    SchemaComponent = SchemaTenantCardSettings;
  } else {
    SchemaComponent = SchemaHostCardSettings;
  }

  const onChange = ({ name, value }) => {
    dispatch(setCardProp({ id, name, value }));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: MAIN_BRIGHT,
        paddingTop: 10,
      }}
    >
      <SchemaComponent data={data} onChange={onChange} />
    </View>
  );
};
