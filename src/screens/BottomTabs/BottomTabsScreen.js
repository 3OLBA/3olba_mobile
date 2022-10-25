import Home from "../HomeScreen";
import SendRequest from "../SendRequestScreen";
import Cards from "../CardsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";

export default function BottomTabsScreen() {
    const TabStack = createBottomTabNavigator();

    const screenOptions = ({route}) => ({
        tabBarIcon: ({focused}) => {
            let icon = "";
            const color = focused ? "#559dff" : "#828282";
            const size = 24;
            switch(route.name){
                case "Cards" :
                    icon = "credit-card";
                    break;
                case "Home" :
                    icon = "home";
                    break;
                case "SendRequest" :
                    icon = "send";
                    break;
                default :
                    icon = "dashboard";
            }
            return <MaterialIcons name={icon} size={size} color={color}/>
        },
        tabBarStyle: {
            backgroundColor: "#1e1e1e",
            borderTopColor:"#1e1e1e",
            paddingBottom:32,
        },
     });

    return (
        <TabStack.Navigator screenOptions = {screenOptions}>
            <TabStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <TabStack.Screen name="SendRequest" component={SendRequest} options={{ title : "Send & Request", headerShown: false }}/>
            <TabStack.Screen name="Cards" component={Cards} options={{ title : "My Cards" , headerShown: false }}/>
        </TabStack.Navigator>
    );
}


