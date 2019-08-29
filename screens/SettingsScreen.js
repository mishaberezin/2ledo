import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
import { View, ScrollView, StyleSheet, SectionList } from 'react-native';
import { Text } from 'react-native-ui-kitten';
// import { ImagePicker, Permissions, Constants } from 'expo';

// async function getPermissionAsync() {
//   if (Constants.platform.ios) {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//     if (status !== 'granted') {
//       alert('Без камеры никак!');
//     }
//   }
// }

function SettingsScreen() {
  // const { navigation, user, setUserPhoto } = props;

  // const handleNextButtonPress = () => {
  //   navigation.navigate('Cards');
  // };

  // const handlePhotoButtonPress = async () => {
  //   await getPermissionAsync();
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //   });

  //   if (!result.cancelled) {
  //     setUserPhoto(result.uri);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.headView}>
        <Text category="h1">Настройки</Text>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text>Ищу</Text>
            <Text>Предлагаю</Text>
            <Text>О себе</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.mainView}>
        <SectionList
          renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          sections={[
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
          ]}
          keyExtractor={(item, index) => item + index}
        />

        {/* <TextInput
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
        <Button title="Дальше поехали 🚍" onPress={handleNextButtonPress} /> */}
      </View>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: '⚙️',
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
    height: 200,
    paddingTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  mainView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
});

const mapStateToProps = state => {
  const profile = state.profilesById[state.user.selectedProfileId];

  return {
    user: state.user,
    data: profile.data,
    tune: profile.tune,
  };
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
