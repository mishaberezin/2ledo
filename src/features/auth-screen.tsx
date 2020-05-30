import React, { FC } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from '@src/navigation';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '@ui-kitten/components';
import { resolveAuth } from '@src/redux/slices';
import { SCREEN_WIDTH } from '@src/constants/device';

type Props = StackScreenProps<AuthStackParamList, 'Auth'>;

export const AuthScreen: FC<Props> = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(resolveAuth());
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} onPress={handleClick}>
        Войти
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  button: {
    width: 300,
    marginTop: 20,
  },
});
