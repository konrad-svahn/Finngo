import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen';
import StartScreen from '../screens/StartScreen';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StartScreen} />
      <Tab.Screen name="Profile" component={MapScreen} />
    </Tab.Navigator>
  );
}

export default NavBar;