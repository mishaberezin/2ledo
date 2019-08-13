import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import InitialScreen from '../screens/InitialScreen';
import MainStack from './MainStack';
// import DemoStack from "./DemoStack";
import AuthStack from './AuthStack';
import SetupStack from './SetupStack';

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitialScreen,
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
