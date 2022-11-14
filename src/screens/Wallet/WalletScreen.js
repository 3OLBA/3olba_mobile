import styled from 'styled-components/native';
import coinsData from '../../../CoinsData';
import HeaderScreen from "../Common/HeaderScreen";
import Coin from "./RenderCoinScreen";
import Text from "../../components/Text";
import { Ionicons } from '@expo/vector-icons';
import {useTranslation} from "react-i18next";

export default function WalletScreen({navigation}) {
    const {t} = useTranslation();
    const screenName = t("Wallet.Wallet");
    const renderCoins = ({ item }) => {
        return (
            <Coin item={item}/>
        )
    }

    return (
        <Container>
            <HeaderScreen screenName={screenName} navigation={navigation}/>

            <CustomPrice>
                <Title>
                    <Text center xlarge heavy>{t("Wallet.ListOfCoins")} </Text>
                </Title>
                <AddPrice>
                    <Ionicons name="ios-add-circle" size={24} color="white" />
                </AddPrice>
            </CustomPrice>

            <Coins data={coinsData} renderItem={renderCoins}/>
            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #1e1e1e
`;

const Coins = styled.FlatList`
    padding : 0 8px;
`;

const Title = styled.View`
    flex-direction : row;
    align-items : center;
    padding : 0 15px;
`;

const CustomPrice = styled.View`
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
    margin-left : 10px;
    margin-right : 10px;
`;

const AddPrice = styled.TouchableOpacity`
    background-color : #3d3d3d;
    padding : 10px;
    border-radius : 6px; 
    margin-left : 10px;
    margin-right : 10px;
    margin-bottom : 15px;
`;

const StatusBar = styled.StatusBar``;
