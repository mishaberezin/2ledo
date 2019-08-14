import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import InitScreen from '../screens/InitScreen';
import MainStack from './MainStack';
// import DemoStack from "./DemoStack";
import AuthStack from './AuthStack';
import SetupStack from './SetupStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitScreen,
      Main: MainStack,
      // Demo: DemoStack,
      Auth: AuthStack,
      Setup: SetupStack
    },
    {
      initialRouteName: 'Init'
    }
  )
);
