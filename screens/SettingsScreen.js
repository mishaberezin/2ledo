import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
import { View, SectionList } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import ToledoHeader5 from '../components/ToledoHeader5';
import { SettingsRoomsCount } from '../components/Settings/SettingsRoomsCount';
import { SettingsPriceRange } from '../components/Settings/SettingsPriceRange';
import COLORS from '../constants/colors';

const uiSchema = {
  // anchors: [], // навигация в шапке, можно промотать к любой секции
  sections: [{ title: 'Ищу квартиру!', data: [] }],
};

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.screenBackground,
        paddingTop: 10,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <SettingsRoomsCount />
        <SettingsPriceRange />
        <SectionList
          ItemSeparatorComponent={() => (
            <Text appearance="hint">Separator</Text>
          )}
          renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <ToledoHeader5>{title}</ToledoHeader5>
          )}
          sections={uiSchema.sections}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
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
