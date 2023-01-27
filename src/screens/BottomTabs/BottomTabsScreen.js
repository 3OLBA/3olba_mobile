import Home from "../Home/HomeScreen";
import TransferScreen from "../Transfer/TransferScreen";
import Cards from "../Cards/CardsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons, Entypo, AntDesign} from "@expo/vector-icons";
import WalletScreen from "../Wallet/WalletScreen";
import {useTranslation} from "react-i18next";
import {useContext, useEffect} from "react";
import {MyContext} from "../../../Global/Context";
import {getAccount} from "../../actions/AccountAction";
import {retrieveFromSecureStore} from "../../components/StoreData";
import {getTransactions} from "../../actions/TransactionAction";

export default function BottomTabsScreen() {
    const TabStack = createBottomTabNavigator();
    const {t} = useTranslation();
    const {user , setUser} = useContext(MyContext);
    const {account , setAccount} = useContext(MyContext);
    const {transactions , setTransactions} = useContext(MyContext);


    useEffect(  () => {
        console.log("bottom");
        getAccount().then(response => setAccount(response));
        getTransactions().then(response => setTransactions(response));
        console.log("account", account);
        console.log("transactions", transactions);
    },[])

    const screenOptions = ({route}) => ({
        tabBarIcon: ({focused}) => {
            let icon = "";
            const color = focused ? "#559dff" : "#828282";
            const size = 24;
            switch(route.name){
                case "Transactions" :
                    icon = "circular-graph";
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
            if(icon === "wallet" || icon === "circular-graph"){
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
            <TabStack.Screen name="Wallet"  component={WalletScreen} options={{ title : t("Wallet.Wallet"), headerShown: false }}/>
            <TabStack.Screen name="Transfer"  component={TransferScreen} options={{ title : t("Transfer.Transfer"), headerShown: false }}/>
            <TabStack.Screen name="Transactions" component={Cards} options={{ title : t("Transactions.Transactions") , headerShown: false }}/>
        </TabStack.Navigator>
    );
}


