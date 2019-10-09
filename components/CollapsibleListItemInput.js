import React from 'react';
import { Input } from 'react-native-elements';
import { CollapsibleListItem } from './CollapsibleListItem';

export const CollapsibleListItemInput = props => {
  const { inputProps, onChange, value, ...collapsibleListItemProps } = props;

  return (
    <CollapsibleListItem {...collapsibleListItemProps}>
      <Input
        defaultValue={String(value)}
        onChangeText={onChange}
        keyboardType="number-pad"
        underlineColorAndroid="transparent"
        inputContainerStyle={{
          borderBottomWidth: 0,
          paddingLeft: 0,
        }}
        {...inputProps}
      />
    </CollapsibleListItem>
  );
};
