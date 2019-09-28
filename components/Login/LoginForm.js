import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Text,
  withStyles,
  Input,
  Button,
  Spinner,
} from 'react-native-ui-kitten';

import colors from '../../constants/colors';
import { SCREEN_WIDTH } from '../../constants/device';
import { sendPhone, sendCode } from '../../redux/actions/loginActions';

const LoginFormContainer = ({
  themedStyle,
  sendPhone,
  sendCode,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [codeHash, setHash] = useState(null);
  const [code, setCode] = useState('');

  const handlePhoneInput = useCallback(value => {
    if (/^[0-9]{1,10}$/.test(value)) {
      setPhone(value);
    }
  }, []);

  const handleCodeInput = useCallback(value => {
    if (/^[0-9]{1,6}$/.test(value)) {
      setCode(value);
    }
  }, []);

  const handleButtonPress = useCallback(() => {
    if (step === 'phone') {
      setLoading(true);
      sendPhone(phone).then(hash => {
        setHash(hash);
        setStep('code');
        setLoading(false);
      });
    }
    if (step === 'code') {
      setLoading(true);
      sendCode(code, codeHash).then(({ token }) => {
        onSuccess(token);
      });
    }
  }, [step, sendPhone, phone, sendCode, code, codeHash, onSuccess]);

  if (loading) {
    return (
      <View style={themedStyle.container}>
        <Spinner size="giant" />
      </View>
    );
  }

  return (
    <View style={themedStyle.container}>
      <Text category="h3">Регистрация</Text>
      {step === 'phone' && (
        <View style={themedStyle.inputRow}>
          <Text style={themedStyle.phoneInputLabel}>+7</Text>
          <Input
            style={themedStyle.phoneInput}
            textStyle={themedStyle.inputText}
            value={phone}
            onChangeText={handlePhoneInput}
          />
        </View>
      )}
      {step === 'code' && (
        <View style={themedStyle.inputRow}>
          <Text style={themedStyle.codeInputLabel}>Код:</Text>
          <Input
            style={themedStyle.codeInput}
            textStyle={themedStyle.codeInputText}
            value={code}
            onChangeText={handleCodeInput}
          />
        </View>
      )}
      <View style={themedStyle.submitButtonRow}>
        <Button
          style={themedStyle.submitButton}
          disabled={false}
          onPress={handleButtonPress}
        >
          Отправить
        </Button>
      </View>
    </View>
  );
};

const LoginForm = withStyles(LoginFormContainer, () => ({
  container: {
    minHeight: 200,
    width: SCREEN_WIDTH * 0.8,
    padding: 20,
    paddingVertical: 30,
    borderColor: colors.mainBackgroundColor,
    borderWidth: 1,
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
    fontSize: 20,
  },
  codeInputLabel: {
    paddingRight: 10,
    fontSize: 20,
  },
  phoneInput: {
    flex: 3,
  },
  codeInput: {
    flex: 2,
  },
  inputText: {
    fontSize: 20,
  },
  submitButtonRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  submitButton: {
    flex: 1,
    backgroundColor: colors.darkVioletColor,
    borderColor: colors.darkVioletColor,
  },
}));

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendPhone,
      sendCode,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
