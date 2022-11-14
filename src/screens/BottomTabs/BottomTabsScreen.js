import Home from "../Home/HomeScreen";
import TransferScreen from "../SendRequest/TransferScreen";
import Cards from "../Cards/CardsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons,Entypo} from "@expo/vector-icons";
import WalletScreen from "../Wallet/WalletScreen";
import {useTranslation} from "react-i18next";

export default function BottomTabsScreen() {
    const TabStack = createBottomTabNavigator();
    const {t} = useTranslation();

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
                case "Transfer" :
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
            <TabStack.Screen name="Home" component={Home} options={{ title : t("Home.Home"), headerShown: false }}/>
            <TabStack.Screen name="Cards" component={Cards} options={{ title : t("Cards.Cards") , headerShown: false }}/>
            <TabStack.Screen name="Wallet" component={WalletScreen} options={{ title : t("Wallet.Wallet"), headerShown: false }}/>
            <TabStack.Screen name="Transfer" component={TransferScreen} options={{ title : t("Transfer.Transfer"), headerShown: false }}/>

        </TabStack.Navigator>
    );
}


