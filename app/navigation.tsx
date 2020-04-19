import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Serp } from './screens/serp';

// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import MatchIndicatorButton from './components/MatchIndicatorButton';
// import SerpScreen from './screens/SerpScreen';
// import ChatScreen from './screens/ChatScreen';
// import LoginScreen from './screens/LoginScreen';
// import { SettingsCardScreen } from './screens/SettingsCardScreen';
// import { SettingsTuneScreen } from './screens/SettingsTuneScreen';
// import { SettingsUserScreen } from './screens/SettingsUserScreen';
// import { SettingsCardPreviewScreen } from './screens/SettingsCardPreviewScreen';
// import FavoritesScreen from './screens/FavoritesScreen';
// import CardScreen from './screens/CardScreen';
// import { Button } from 'react-native-elements';

// import { NavHeader } from './components/NavHeader';

const SerpStack = createStackNavigator();
const SerpStackScreen = () => {
  return (
    <SerpStack.Navigator initialRouteName="Serp">
      <SerpStack.Screen name="Serp" component={Serp} />
      {/* <SerpStack.Screen name="CardDetails" component={CardDetails} /> */}
    </SerpStack.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="SerpStackScreen"
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      <RootStack.Screen name="SerpStackScreen" component={SerpStackScreen} />
    </RootStack.Navigator>
  );
};

export const Navigation = () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);

// const SettingsStack = createStackNavigator(
//   {
//     Card: SettingsCardScreen,
//     User: SettingsUserScreen,
//     Tune: SettingsTuneScreen,
//     CardPreview: SettingsCardPreviewScreen,
//   },
//   {
//     initialRouteName: 'Card',
//     defaultNavigationOptions: ({ navigation }) => {
//       let cardItem;
//       if (navigation.state.routeName === 'Card') {
//         cardItem = {
//           text: 'Превью',
//           style: { color: 'blue' },
//           onPress: () => navigation.navigate('CardPreview'),
//         };
//       } else {
//         cardItem = {
//           text: 'Карточка',
//           onPress: () => navigation.navigate('Card'),
//         };
//       }

//       return {
//         header: (
//           <NavHeader
//             title="Настройки"
//             menuItems={[
//               cardItem,
//               { text: 'О себе', onPress: () => navigation.navigate('User') },
//               { text: 'Прочее', onPress: () => navigation.navigate('Tune') },
//             ]}
//           />
//         ),
//       };
//     },
//   },
// );

// const FavoritesStack = createStackNavigator(
//   {
//     FavoritesMain: FavoritesScreen,
//     CardDetail: {
//       screen: CardScreen,
//       navigationOptions: ({ navigation }) => {
//         return {
//           header: (
//             <NavHeader
//               title={'Просмотр'}
//               menuItems={[
//                 {
//                   text: 'Назад',
//                   onPress: () => {
//                     navigation.navigate('FavoritesMain');
//                   },
//                 },
//               ]}
//             />
//           ),
//         };
//       },
//     },
//   },
//   {
//     initialRouteName: 'FavoritesMain',
//     defaultNavigationOptions: () => {
//       return {
//         header: <NavHeader title="Избранное" />,
//       };
//     },
//   },
// );

// const MainStack = createStackNavigator(
//   {
//     Serp: SerpScreen,
//     Settings: SettingsStack,
//     Favorites: FavoritesStack,
//   },
//   {
//     initialRouteName: 'Serp',
//   },
// );

// ChatScreen.navigationOptions = {
//   title: '🤖',
// };

// SerpScreen.navigationOptions = ({ navigation }) => ({
//   headerLeft: (
//     <React.Fragment>
//       <Button
//         buttonStyle={{
//           height: 56,
//           justifyContent: 'space-between',
//         }}
//         type="clear"
//         icon={{ type: 'material', name: 'person' }}
//         onPress={() => navigation.navigate('Settings')}
//       />
//       <Button
//         buttonStyle={{
//           height: 56,
//           justifyContent: 'space-between',
//         }}
//         type="clear"
//         icon={{ type: 'entypo', name: 'map' }}
//         onPress={() => navigation.navigate('Settings')}
//         disabled={true}
//         disabledStyle={{
//           opacity: 0.3,
//         }}
//       />
//     </React.Fragment>
//   ),
//   headerRight: (
//     <MatchIndicatorButton
//       onPress={() => {
//         navigation.navigate('Favorites');
//       }}
//     />
//   ),
// });

// SettingsStack.navigationOptions = ({ navigation }) => ({
//   headerLeft: null,
//   headerRight: (
//     <Button
//       buttonStyle={{
//         height: 56,
//         justifyContent: 'space-between',
//       }}
//       type="clear"
//       icon={{ type: 'ionicon', name: 'ios-arrow-forward' }}
//       onPress={() => navigation.navigate('Serp')}
//     />
//   ),
// });

// FavoritesStack.navigationOptions = ({ navigation }) => ({
//   headerLeft: (
//     <Button
//       buttonStyle={{
//         height: 56,
//         justifyContent: 'space-between',
//       }}
//       type="clear"
//       icon={{ type: 'ionicon', name: 'ios-arrow-back' }}
//       onPress={() => navigation.navigate('Serp')}
//     />
//   ),
//   headerRight: null,
// });

// export const Navigation = createAppContainer(
//   createSwitchNavigator(
//     {
//       Init: InitScreen,
//       Main: MainStack,
//       Login: LoginScreen,
//       Chat: ChatScreen,
//     },
//     {
//       initialRouteName: 'Init',
//     },
//   ),
// );
