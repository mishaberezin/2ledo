import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, withStyles, Input, Spinner } from '@ui-kitten/components';

import { sendPhone, sendCode } from '@src/redux/actions/login-actions';
import { ToledoButton } from '@src/components/toledo-button';

import { MAIN_BACKGROUND_COLOR } from '@src/constants/colors';
import { SCREEN_WIDTH } from '@src/constants/device';

const LoginFormContainer = (props) => {
  const {
    onSuccess,
    eva: { style },
  } = props;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [codeHash, setHash] = useState(null);
  const [code, setCode] = useState('');

  const handlePhoneInput = useCallback((value) => {
    if (/^[0-9]{0,10}$/.test(value)) {
      setPhone(value);
    }
    if (value.length === 10) {
      setButtonDisabled(false);
    }
  }, []);

  const handleCodeInput = useCallback(
    async (value) => {
      if (/^[0-9]{1,4}$/.test(value)) {
        setCode(value);
      }
      if (value.length >= 4) {
        setLoading(true);
        const { token } = await dispatch(sendCode(code, codeHash));
        onSuccess(token);
      }
    },
    [code, codeHash, onSuccess, sendCode],
  );

  const handleButtonPress = useCallback(async () => {
    setLoading(true);
    const hash = await dispatch(sendPhone(phone));
    setHash(hash);
    setStep('code');
    setButtonDisabled(true);
    setLoading(false);
  }, [sendPhone, phone]);

  if (loading) {
    return (
      <View style={style.container}>
        <Spinner size="giant" />
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text category="h3">Войти</Text>
      {step === 'phone' && (
        <React.Fragment>
          <View style={style.inputRow}>
            <Text style={style.phoneInputLabel}>+7</Text>
            <Input
              style={[style.input, style.phoneInput]}
              textStyle={style.phoneInputText}
              value={phone}
              autoFocus
              onChangeText={handlePhoneInput}
            />
          </View>
          <View style={style.submitButtonRow}>
            <ToledoButton disabled={buttonDisabled} onPress={handleButtonPress}>
              Отправить
            </ToledoButton>
          </View>
        </React.Fragment>
      )}
      {step === 'code' && (
        <View style={style.inputRow}>
          <Text style={style.codeInputLabel}>Код:</Text>
          <Input
            style={[style.input, style.codeInput]}
            textStyle={style.codeInputText}
            value={code}
            autoFocus
            onChangeText={handleCodeInput}
          />
        </View>
      )}
    </View>
  );
};

export const LoginForm = withStyles(LoginFormContainer, () => ({
  container: {
    minHeight: 200,
    width: SCREEN_WIDTH * 0.8,
    padding: 20,
    paddingVertical: 30,
    borderColor: MAIN_BACKGROUND_COLOR,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  phoneInputLabel: {
    paddingRight: 10,
    fontSize: 22,
  },
  codeInputLabel: {
    paddingRight: 10,
    fontSize: 22,
  },
  input: {
    backgroundColor: '#fff0',
    borderColor: '#fff0',
  },
  phoneInput: {
    flex: 3,
  },
  codeInput: {
    flex: 2,
  },
  phoneInputText: {
    fontSize: 22,
    color: '#fff',
  },
  codeInputText: {
    fontSize: 30,
    letterSpacing: 8,
    color: '#fff',
  },
  submitButtonRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
}));
