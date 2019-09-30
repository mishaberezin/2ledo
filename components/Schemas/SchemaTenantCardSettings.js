import React, { useState } from 'react';
import isPlainObject from 'lodash/isPlainObject';
import { View, ScrollView, Image, Text } from 'react-native';
// import { Text } from 'react-native-ui-kitten';
import { ToledoHeader5 } from '../ToledoHeader5';
import { SettingsNumberOfPeople } from '../Settings/SettingsNumberOfPeople';
import { SettingsDescription } from '../Settings/SettingsDescription';
import { SettingsPhotos } from '../Settings/SettingsPhotos';
import { SettingsTargetPrice } from '../Settings/SettingsTargetPrice';
import { SettingsNumberOfRoomsRange } from '../Settings/SettingsNumberOfRoomsRange';
import { SettingsRentalPeriod } from '../Settings/SettingsRentalPeriod';
import { SettingsLandmarks } from '../Settings/SettingsLandmarks';

import { CollapsibleRow } from '../CollapsibleRow';

import Accordion from 'react-native-collapsible/Accordion';

const applyData = (Component, data, props) => {
  if (!data) {
    return null;
  }

  const value = data.value || data;
  const dataProps = isPlainObject(value) ? value : { value };
  const allProps = {
    ...dataProps,
    ...props,
  };

  return <Component {...allProps} />;
};

export function SchemaTenantCardSettings(props) {
  const { data, onChange } = props;
  const {
    // NumberOfPeople,
    TargetPrice,
    // Description,
    // Photos,
    // NumberOfRoomsRange,
    // RentalPeriod,
    // Landmarks,
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
    // {
    //   title: 'Предлагаю',
    //   content: 'Lorem ipsum Second',
    // },
  ];

  const renderHeader = section => {
    return (
      <View style={{ paddingLeft: 20 }}>
        <ToledoHeader5>{section.title}</ToledoHeader5>
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

      {/* {applyData(SettingsTargetPrice, TargetPrice)} */}

      {/* {NumberOfRoomsRange && (
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
      {PriceRange && <SettingsTargetPrice {...PriceRange} />}
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
      </CollapsibleRow> */}
    </ScrollView>
  );
}
