import TouchScreen from './src/screens/Login/TouchScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsScreen from "./src/screens/BottomTabs/BottomTabsScreen";
import React, {useCallback, useEffect, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import OnBoardingScreen from "./src/screens/OnBoarding/OnBoardingScreen";
import {LoginScreen} from "./src/screens/Login/LoginScreen";
import {ForgetPasswordScreen} from "./src/screens/Login/ForgetPasswordScreen";
import {CreateAccountScreen} from "./src/screens/Login/CreateAccountScreen";
import LanguageScreen from "./src/screens/Login/LanguageScreen";
import {VerifyAccountScreen} from "./src/screens/Login/VerifyAccountScreen";
import {MyContext} from "./Global/Context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const AppStack = createStackNavigator();
  const Stack = createNativeStackNavigator();
  const [appIsReady, setAppIsReady] = useState(false);
  const [transactions,setTransactions] = useState({});
  const [account,setAccount] = useState({});
  const [beneficiaries,setBeneficiaries] = useState({});
  const [user,setUser] = useState({
        email : "test@test.com",
        username : "khalil",
        phoneNumber : "0617611061"
    });


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
        <MyContext.Provider value={{user,setUser,
            account,setAccount,
            beneficiaries,setBeneficiaries,
            transactions,setTransactions}}>
            <NavigationContainer onReady={onLayoutRootView}>
                <Stack.Navigator>
                    <AppStack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="Start" component={TouchScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="VerifyAccount" component={VerifyAccountScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown: false }}/>
                    <AppStack.Screen name="Bottom" component={BottomTabsScreen} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </MyContext.Provider>
  );
}

