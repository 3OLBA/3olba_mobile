import { StyleSheet } from 'react-native';
import TouchScreen from './src/screens/Login/TouchScreen';
import Pin from './src/screens/Login/PinScreen';
import Home from './src/screens/Home/HomeScreen';
import SendRequest from './src/screens/SendRequest/SendRequestScreen';
import Cards from './src/screens/Cards/CardsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import BottomTabsScreen from "./src/screens/BottomTabs/BottomTabsScreen";

export default function App() {
  const AppStack = createStackNavigator();

    return (
      <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen name="Login" component={TouchScreen} options={{ headerShown: false }}/>
          <AppStack.Screen name="Pin" component={Pin} options={{ headerShown: false }}/>
            <AppStack.Screen name="Bottom" component={BottomTabsScreen} options={{ headerShown: false }}/>
        </AppStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
