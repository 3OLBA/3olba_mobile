import styled from 'styled-components/native';
import Text from '../../components/Text';
import ChartScreen from './ChartScreen';
import {FontAwesome5,MaterialIcons , AntDesign} from "@expo/vector-icons";
import TransactionData from "../../../TransactionsData";
import HeaderScreen from "../Common/HeaderScreen";
import {useTranslation} from "react-i18next";
import {retrieveFromSecureStore, RetrieveJsonData} from "../../components/StoreData";
import {MyContext} from "../../../Global/Context";
import {useContext, useEffect} from "react";

export default function HomeScreen({navigation}) {
    const {t} = useTranslation();
    const screenName = t("Home.Home");
    const {account , setAccount} = useContext(MyContext);
    const {transactions , setTransactions} = useContext(MyContext);
    const renderTransactions = ({item}) => {
        return (
                <Purshase>
                    <PurshaseInfo>
                        <Text heavy >{item?.benificiaryName}</Text>
                        <Text color="#727479">{item?.bankType}</Text>
                    </PurshaseInfo>
                    <PurshaseInfo>
                        <Text medium black large color="#228B22">{item?.amount} {item.currency}</Text>
                        <Text heavy color="#727479">{item?.executionDate}</Text>
                    </PurshaseInfo>
                </Purshase>
            )
    }
    const logout = () => {
        navigation.navigate("Start");
    }
    return (
        <Container>

            <HeaderScreen navigation={navigation} screenName={screenName}/>

            <Text center title black>
                {account?.amount} {t("Commun.MAD")}
            </Text>
            <Text center medium color="#727479">
                {t("Commun.CurrentBalance")}
            </Text>

            <ChartScreen/>

            <Purshases ListHeaderComponent={
                <>
                    <TransactionsHeader>
                        <Text>{t("Home.LastTransactions")}</Text>
                        <Search placeHolder="Search transaction" />
                        <AntDesign name="search1" size={18} color="#5196f4" />
                        <Search placeHolder="Search transaction" />
                    </TransactionsHeader>
                </>
            }
            />
            <Purshases data={transactions}
                       renderItem={renderTransactions}
                       showVerticalScrollIndicator={false}
            />


            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color: #1e1e1e;
`;

const Header = styled.View`
    flex-direction : row;
    align-items : center;
    margin : 16px 16px 32px 16px; 
`;

const ProfilePhoto = styled.Image`
    width : 60px;
    height : 60px;
    border-radius : 60px;
`;

const Welcome = styled.View`
    flex : 1;
    padding : 0 16px ;
`;

const Purshases = styled.FlatList`
    background-color : #2c2c2c;
    padding : 16px;
`;

const Purshase = styled.View`
    flex-direction : row;
    justify-content : space-between;
    border-bottom-width : 1px;
    border-color : #393939
    padding-bottom : 12px;
    margin : 12px;
`;

const PurshaseInfo = styled.View`
`;

const TransactionsHeader = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
    padding-bottom : 90px;
`;

const SearchContainer = styled.View`
    background-color : #3d3d3d;
    flex-direction : row;
    align-items : center;
    padding : 0 8px;
    border-radius : 6px;
    margin : 16px 0px;
`;

const Search = styled.TextInput`
    flex : 1;
    padding : 8px 16px;
    font-family : "Avenir";
    color : #dbdbdb
`;

const StatusBar = styled.StatusBar``;

const Chart = styled.View`
    margin : 32px 0;
`;
