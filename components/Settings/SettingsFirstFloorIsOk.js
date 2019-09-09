import React, { useState } from 'react';
import { CheckBox } from 'react-native-ui-kitten';

export function SettingsFirstFloorIsOk(props) {
  const { value } = props;
  const [checked, setChecked] = useState(value);

  return (
    <CheckBox
      checked={checked}
      text="Первый этаж это ОК"
      onChange={setChecked}
    />
  );
}
