import React, { useState, useCallback } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
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
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [codeHash, setHash] = useState(null);
  const [code, setCode] = useState('');

  const handlePhoneInput = useCallback(value => {
    if (/^[0-9]{0,10}$/.test(value)) {
      setPhone(value);
    }
    if (value.length === 10) {
      setButtonDisabled(false);
    }
  }, []);

  const handleCodeInput = useCallback(
    value => {
      if (/^[0-9]{1,4}$/.test(value)) {
        setCode(value);
      }
      if (value.length >= 4) {
        setLoading(true);
        sendCode(code, codeHash).then(({ token }) => {
          onSuccess(token);
        });
      }
    },
    [code, codeHash, onSuccess, sendCode]
  );

  const handleButtonPress = useCallback(() => {
    setLoading(true);
    sendPhone(phone).then(hash => {
      setHash(hash);
      setStep('code');
      setButtonDisabled(true);
      setLoading(false);
    });
  }, [sendPhone, phone]);

  if (loading) {
    return (
      <View style={themedStyle.container}>
        <Spinner size="giant" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={themedStyle.container}>
      <Text category="h3">Регистрация</Text>
      {step === 'phone' && (
        <React.Fragment>
          <View style={themedStyle.inputRow}>
            <Text style={themedStyle.phoneInputLabel}>+7</Text>
            <Input
              style={[themedStyle.input, themedStyle.phoneInput]}
              textStyle={themedStyle.phoneInputText}
              value={phone}
              autoFocus
              onChangeText={handlePhoneInput}
            />
          </View>
          <View style={themedStyle.submitButtonRow}>
            <Button
              style={themedStyle.submitButton}
              disabled={buttonDisabled}
              onPress={handleButtonPress}
            >
              Отправить
            </Button>
          </View>
        </React.Fragment>
      )}
      {step === 'code' && (
        <View style={themedStyle.inputRow}>
          <Text style={themedStyle.codeInputLabel}>Код:</Text>
          <Input
            style={[themedStyle.input, themedStyle.codeInput]}
            textStyle={themedStyle.codeInputText}
            value={code}
            autoFocus
            onChangeText={handleCodeInput}
          />
        </View>
      )}
    </KeyboardAvoidingView>
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
  },
  codeInputText: {
    fontSize: 30,
    letterSpacing: 8,
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
