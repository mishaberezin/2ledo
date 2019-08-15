import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import InitScreen from '../screens/InitScreen';
import MainStack from './MainStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitScreen,
      Main: MainStack
    },
    {
      initialRouteName: 'Init'
    }
  )
);
