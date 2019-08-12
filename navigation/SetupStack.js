import { createStackNavigator } from 'react-navigation';
import SetupScreen from '../screens/SetupScreen';
import TestScreen from '../screens/TestScreen';

const SetupStack = createStackNavigator({
  Setup: SetupScreen,
  Test: TestScreen
});

export default SetupStack;
