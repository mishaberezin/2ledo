import React, { useCallback } from 'react';
import { withStyles, Button } from 'react-native-ui-kitten';

import { DARK_VIOLET_COLOR } from '@toledo/constants/colors';

export default withStyles(
  ({ onPress, disabled, children, themedStyle }) => {
    const handleButtonPress = useCallback(
      e => {
        onPress && onPress(e);
      },
      [onPress]
    );

    return (
      <Button
        style={themedStyle.button}
        disabled={disabled}
        onPress={handleButtonPress}
      >
        {children}
      </Button>
    );
  },
  () => ({
    button: {
      flex: 1,
      backgroundColor: DARK_VIOLET_COLOR,
      borderColor: DARK_VIOLET_COLOR,
      borderRadius: 30,
      borderWidth: 1,
    },
  })
);
