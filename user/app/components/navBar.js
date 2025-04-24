import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet} from 'react-native';
import MapScreen from '../screens/MapScreen';
import StartScreen from '../screens/StartScreen';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator screenOptions={(route) => ({
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          switch (route.name) {
              case "Home": 
                iconName = focused ? "home" : "home-outline";
                break;
              case "Map":
                iconName = focused ? "home" : "home-outline";
                break;
          }
        },
        tabBarLabel: ({children, color, focused}) => (
          <Text style={{fontSize: 15, fontWeight: focused ? "bold" : "normal", color}}>
            {children}
          </Text>
        ),
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "000000",
        headerShown: false
        
    })}>
      <Tab.Screen name="Home" component={StartScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 90,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: 40,
    left: 30,
    right: 30,
    borderRadius: 30,
    borderTopWidth: 0,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  tabBarItemStyle: {
    paddingVertical: 0,
    margin: 0,
    borderRadius: 40
  }
})

export default NavBar;