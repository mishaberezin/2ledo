import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
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

function SettingsScreen(props) {
  const { navigation, user, setUserPhoto } = props;

  const handleNextButtonPress = () => {
    navigation.navigate('Cards');
  };

  const handlePhotoButtonPress = async () => {
    await getPermissionAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
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

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: 'left',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    fontSize: 40,
  },
  textName: {
    fontSize: 40,
  },
  headView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  mainView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
});

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserName,
      setUserPhoto,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsScreen);

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Image,
//   ProgressViewIOS
// } from 'react-native';
// import Logo from '../assets/images/dragon.gif';

// export default function TestScreen({ navigation }) {
//   const onPressButton = () => {
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topContainer}>
//         <Text style={styles.h1}>Настройки?</Text>
//         <Text style={styles.h2}>Best dragons since 1987.</Text>
//       </View>
//       <View style={styles.middleContainer}>
//         <Image source={Logo} style={styles.image} />
//       </View>
//       <ProgressViewIOS number={1} />
//       <View style={styles.bottomContainer}>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Фото"
//             style={styles.button}
//             onPress={onPressButton}
//             color="#fff"
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: '#000',
//     alignItems: 'center',
//     width: '100%'
//   },
//   h1: {
//     color: '#008F68',
//     fontSize: 40
//   },
//   h2: {
//     color: '#FAE042',
//     fontSize: 18,
//     marginTop: 8
//   },
//   image: {
//     width: 300,
//     height: 260,
//     justifyContent: 'center'
//   },
//   buttonContainer: {
//     backgroundColor: '#008F68',
//     borderRadius: 5,
//     padding: 8,
//     margin: 8
//   },
//   topContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   middleContainer: {
//     flex: 3,
//     justifyContent: 'flex-start',
//     alignItems: 'center'
//   },
//   bottomContainer: {
//     justifyContent: 'flex-end',
//     width: '90%',
//     margin: 20,
//     padding: 10
//   }
// });
