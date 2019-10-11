import React from 'react';
// import { Input } from 'react-native-elements';
// import { CollapsibleListItem } from '../CollapsibleListItem';
import { CollapsibleListItemInput } from '../CollapsibleListItemInput';

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
      onChange={value => onChange({ value: Number(value) })}
      listItemProps={{
        subtitle: 'Арендная плата',
        title: formatPrice.format(value),
      }}
    />
  );
}
