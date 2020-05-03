import React, { Fragment } from 'react';
import { config } from '@app/config';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Text, Input, Spinner, Button } from '@ui-kitten/components';
import { logIn } from '@src/redux/actions/auth-actions';
import { ToledoButton } from '@src/components';
import { MAIN_BACKGROUND_COLOR } from '@src/constants/colors';
import { SCREEN_WIDTH } from '@src/constants/device';

export const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const initialValues = { phone: '' };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            const { phone } = values;
            await dispatch(logIn({ phone }));
          }}
        >
          {(formik) => {
            return formik.isSubmitting ? (
              <View style={styles.formContainer}>
                <Spinner size="giant" />
              </View>
            ) : (
              <Fragment>
                <View style={styles.formContainer}>
                  <Text category="h3">Войти</Text>
                  <View style={styles.inputRow}>
                    <Text style={styles.phoneInputLabel}>+7</Text>
                    <Input
                      style={[styles.input, styles.phoneInput]}
                      textStyle={styles.phoneInputText}
                      value={formik.values.phone}
                      onChangeText={(value) => {
                        if (/^[0-9]{0,10}$/.test(value)) {
                          formik.setFieldValue('phone', value);
                        }
                      }}
                    />
                  </View>
                  <View style={styles.submitButtonRow}>
                    <ToledoButton
                      onPress={() => {
                        formik.submitForm();
                      }}
                    >
                      Отправить
                    </ToledoButton>
                  </View>
                </View>

                <Button
                  style={{ width: 300, marginTop: 20, marginBottom: 10 }}
                  onPress={() => {
                    formik.setFieldValue(
                      'phone',
                      config.demoUsers.landlord.phone,
                    );
                    formik.submitForm();
                  }}
                >
                  Войти как собственник
                </Button>
                <Button
                  style={{ width: 300 }}
                  onPress={() => {
                    formik.setFieldValue(
                      'phone',
                      config.demoUsers.tenant.phone,
                    );
                    formik.submitForm();
                  }}
                >
                  Войти как арендатор
                </Button>
              </Fragment>
            );
          }}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  formContainer: {
    minHeight: 200,
    width: SCREEN_WIDTH * 0.8,
    padding: 20,
    paddingVertical: 30,
    marginTop: 30,
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
  },
  codeInputText: {
    fontSize: 30,
    letterSpacing: 8,
  },
  submitButtonRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
