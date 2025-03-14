import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from '../screens/LogInScreen';
import RegisterScreen from '../screens/RegisterScreen'
import NavBar from './navBar';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Navigation" component={NavBar}/>
    </Stack.Navigator>
  );
}

export default NavigationStack