import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
import { View, SectionList } from 'react-native';
import { Text, Select } from 'react-native-ui-kitten';
import ToledoHeader5 from '../components/ToledoHeader5';
// import SettingsNumberOfRoomsSelect from '../components/SettingsNumberOfRoomsSelect';
import COLORS from '../constants/colors';

// Похоже на https://github.com/mozilla-services/react-jsonschema-form/blob/master/docs/form-customization.md
const uiSchema = {
  // anchors: [], // навигация в шапке, можно промотать к любой секции
  sections: [{ title: 'Ищу квартиру!', data: [] }],
};

// {
//   price: {
//     type: 'number',
//     component: 'Range',
//   },
// };

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
        <Select
          data={[
            { text: 'Option 1' },
            { text: 'Option 2' },
            { text: 'Option 3' },
            { text: 'Option 4' },
            { text: 'Option 5' },
            { text: 'Option 6' },
            { text: 'Option 8' },
          ]}
          selectedOption={null}
          onSelect={() => {}}
        />
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
