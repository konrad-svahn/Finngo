import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, ActivityIndicator, View} from 'react-native'
import { useSelector, useDispatch} from 'react-redux'
import { login } from "../redux/testSlice"
import LogInScreen from '../screens/LogInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import NavBar from './navBar'

const Stack = createNativeStackNavigator();

function NavigationStack() {
  const loading = useSelector((state) => state.test.is_loading)
  if (loading) {
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size={'large'}></ActivityIndicator>
    </View>
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Navigation" component={NavBar}/>
    </Stack.Navigator>
  );
}

export default NavigationStack