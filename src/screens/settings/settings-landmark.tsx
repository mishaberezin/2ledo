import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import { View } from 'react-native';
import { SettingsListItem } from '@src/components/settings-list-item';
import { landmarks } from '@src/data/landmarks';

export function SettingsLandmark(props) {
  const { id, data, onChange } = props;

  const selectorItems = landmarks.map((item) => ({
    key: item.id,
    label: item.data.name,
    value: item,
  }));

  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}
    >
      <ModalSelector
        data={selectorItems}
        style={{
          margin: 0,
        }}
        selectedKey={id}
        onChange={(option) => onChange({ value: option.value })}
      >
        <SettingsListItem
          title={data.name}
          subtitle="Метро"
          rightIcon={{
            type: 'font-awesome',
            name: 'circle',
            color: data.color,
          }}
        />
      </ModalSelector>
    </View>
  );
}
