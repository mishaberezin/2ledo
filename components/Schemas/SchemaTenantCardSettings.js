import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { SettingsNumberOfPeople } from '../Settings/SettingsNumberOfPeople';
import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsPriceRange } from '../Settings/SettingsPriceRange';
import { SettingsNumberOfRoomsRange } from '../Settings/SettingsNumberOfRoomsRange';
import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsLandmarks } from '../Settings/SettingsLandmarks';

import { CollapsibleRow } from '../CollapsibleRow';

import Accordion from 'react-native-collapsible/Accordion';

export function SchemaTenantCardSettings(props) {
  const { data, onChange } = props;
  const {
    NumberOfPeople,
    Description,
    Photos,
    PriceRange,
    NumberOfRoomsRange,
    RentalPeriod,
    Landmarks,
  } = data;

  const [activeSections, setActiveSections] = useState([]);

  const SECTIONS = [
    {
      title: 'Ищу квартиру',
      content: (
        <Image
          source={require('../../assets/images/card-tenant.png')}
          style={{ width: 250, height: 300 }}
        />
      ),
    },
    {
      title: 'Предлагаю',
      content: 'Lorem ipsum Second',
    },
  ];

  const renderHeader = section => {
    return (
      <View style={{ paddingLeft: 20 }}>
        <Text category="h2">{section.title}</Text>
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={{}}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <Accordion
        expandMultiple={true}
        activeSections={activeSections}
        sections={SECTIONS}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={activeSections => {
          setActiveSections(activeSections);
        }}
      />
      {NumberOfRoomsRange && (
        <SettingsNumberOfRoomsRange
          {...NumberOfRoomsRange}
        ></SettingsNumberOfRoomsRange>
      )}
      {NumberOfPeople && (
        <SettingsNumberOfPeople
          {...NumberOfPeople}
          onChange={value => onChange({ name: 'NumberOfPeople', value })}
        ></SettingsNumberOfPeople>
      )}
      {PriceRange && <SettingsPriceRange {...PriceRange} />}
      {Description && (
        <SettingsDescription
          {...Description}
          onChange={value => onChange({ name: 'Description', value })}
        ></SettingsDescription>
      )}
      <CollapsibleRow title="Остальное">
        {Photos && <SettingsPhotos {...Photos}></SettingsPhotos>}
        {RentalPeriod && (
          <SettingsRentalPeriod
            {...RentalPeriod}
            onChange={() => console.log(123)}
          ></SettingsRentalPeriod>
        )}
        {Landmarks && (
          <SettingsLandmarks
            {...Landmarks}
            onChange={() => console.log(123)}
          ></SettingsLandmarks>
        )}
      </CollapsibleRow>
    </ScrollView>
  );
}
