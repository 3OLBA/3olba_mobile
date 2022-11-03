import {StyleSheet, Text, View} from 'react-native';
import TouchScreen from './src/screens/Login/TouchScreen';
import OnBoarding from './src/screens/OnBoarding/OnBoardingScreen';
import Pin from './src/screens/Login/PinScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsScreen from "./src/screens/BottomTabs/BottomTabsScreen";
import React, {useCallback, useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import OnBoardingScreen from "./src/screens/OnBoarding/OnBoardingScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const AppStack = createStackNavigator();
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
            <NavigationContainer onReady={onLayoutRootView}>
                <AppStack.Navigator>
                    <AppStack.Screen name="Login" component={TouchScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="Pin" component={Pin} options={{ headerShown: false }}/>
                    <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="Bottom" component={BottomTabsScreen} options={{ headerShown: false }}/>
                </AppStack.Navigator>
            </NavigationContainer>
  );
}

