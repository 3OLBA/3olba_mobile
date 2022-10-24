import Home from "../HomeScreen";
import SendRequest from "../SendRequestScreen";
import Cards from "../CardsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export default function BottomTabsScreen() {
    const TabStack = createBottomTabNavigator();
    const tabBarOptions = {
        tabBarActiveTintColor: '#0a48a7',
        tabBarInactiveTintColor: 'black',
        backgroundColor: "#1e1e1e",
        paddingBottom : 32
    }
    return (
        <TabStack.Navigator screenOptions = {() => tabBarOptions}>
            <TabStack.Screen name="Home" component={Home} />
            <TabStack.Screen name="Send Request" component={SendRequest} />
            <TabStack.Screen name="Cards" component={Cards} />
        </TabStack.Navigator>
    );
}


