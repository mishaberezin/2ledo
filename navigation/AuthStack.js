import { createStackNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';

const AuthStack = createStackNavigator({ SignIn: AuthScreen });

export default AuthStack;
