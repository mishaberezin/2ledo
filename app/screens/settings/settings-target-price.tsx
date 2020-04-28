import React from 'react';
import { CollapsibleListItemInput } from '@app/components/collapsible-list-item-input';

const formatPrice = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

export function SettingsTargetPrice(props) {
  const { value, onChange } = props;

  return (
    <CollapsibleListItemInput
      value={value}
      onChange={(value) => onChange({ value: Number(value) })}
      listItemProps={{
        subtitle: 'Оптимальная цена',
        title: formatPrice.format(value),
      }}
    />
  );
}
