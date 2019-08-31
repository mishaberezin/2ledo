import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName, setUserPhoto } from '../redux/actions/userActions.js';
import { View, SectionList } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import COLORS from '../constants/colors';

function SettingsTuneScreen(props) {
  const { profile } = props;
  const { tune } = profile;

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
        <Text>price: {tune.price}</Text>
        <Text>numberOfRooms: {tune.numberOfRooms}</Text>
        <Text>FLOOR: {tune.floor}</Text>
        <Text>metro: {tune.metro}</Text>
        <SectionList
          ItemSeparatorComponent={() => (
            <Text appearance="hint">Separator View</Text>
          )}
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
)(SettingsTuneScreen);
