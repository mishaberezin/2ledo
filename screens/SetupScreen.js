import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../actions/userActions.js';
import { View, StyleSheet, Button, Text, TextInput, Image } from 'react-native';
import { ImagePicker, Permissions, Constants } from 'expo';

async function getPermissionAsync() {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Без камеры никак!');
    }
  }
}

function SetupScreen(props) {
  const { navigation, user, setUserPhoto } = props;

  const handleNextButtonPress = () => {
    navigation.navigate('Test');
  };

  const handlePhotoButtonPress = async () => {
    await getPermissionAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3]
    });

    if (!result.cancelled) {
      setUserPhoto(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <Text style={styles.header}>О себе</Text>
      </View>
      <View style={styles.mainView}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Имя"
          textContentType="name"
          returnKeyType="done"
          value={user.name}
          onChangeText={text => {
            props.setUserName(text);
          }}
        />
        <Button title="Фото" onPress={handlePhotoButtonPress} />
        {user.photo && (
          <Image
            source={{ uri: user.photo }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <Button title="Дальше поехали 🚍" onPress={handleNextButtonPress} />
      </View>
    </View>
  );
}

SetupScreen.navigationOptions = {
  title: 'Немного о себе'
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: 'left'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    fontSize: 40
  },
  textName: {
    fontSize: 40
  },
  headView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  mainView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
  }
});

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserName,
      setUserPhoto
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupScreen);
