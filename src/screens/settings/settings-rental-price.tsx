import React from 'react';
// import { Input } from 'react-native-elements';
// import { CollapsibleListItem } from '@src/components/collapsible-list-item';
import { CollapsibleListItemInput } from '@src/components/collapsible-list-item-input';

const formatPrice = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

export function SettingsRentalPrice(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleListItemInput
      value={value}
      onChange={(value) => onChange({ value: Number(value) })}
      listItemProps={{
        subtitle: 'Арендная плата',
        title: formatPrice.format(value),
      }}
    />
  );
}
