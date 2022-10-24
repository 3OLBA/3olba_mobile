import { StyleSheet, Text, View } from 'react-native';
import TouchScreen from './src/screens/TouchScreen';
import Pin from './src/screens/PinScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  const AppStack = createStackNavigator();
  return (
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name="Touch" component={TouchScreen} options={{ headerShown: false }}/>
          <AppStack.Screen name="Pin" component={Pin} options={{ headerShown: false }}/>
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
