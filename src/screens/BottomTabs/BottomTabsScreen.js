import Home from "../Home/HomeScreen";
import SendRequest from "../SendRequest/SendRequestScreen";
import Cards from "../Cards/CardsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons,Entypo} from "@expo/vector-icons";
import WalletScreen from "../Wallet/WalletScreen";

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
                case "Wallet" :
                    icon = "wallet";
                    break;
                case "SendRequest" :
                    icon = "send";
                    break;
                default :
                    icon = "dashboard";
            }
            if(icon === "wallet"){
                return <Entypo name={icon} size={size} color={color} />
            }
            else{
                return <MaterialIcons name={icon} size={size} color={color}/>
            }
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
            <TabStack.Screen name="Cards" component={Cards} options={{ title : "Cards" , headerShown: false }}/>
            <TabStack.Screen name="Wallet" component={WalletScreen} options={{ title : "Wallet" , headerShown: false }}/>
            <TabStack.Screen name="SendRequest" component={SendRequest} options={{ title : "Transfer", headerShown: false }}/>

        </TabStack.Navigator>
    );
}


