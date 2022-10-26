import styled from 'styled-components';
import Text from '../components/Text';
import {FontAwesome5,MaterialIcons , AntDesign} from "@expo/vector-icons";

import TransactionData from "../../TransactionsData";

export default function HomeScreen() {
    const renderTransactions = ({item}) => {
        return (
                <Purshase>
                    <PurshaseInfo>
                        <Text>{item.product}</Text>
                        <Text>{item.store}</Text>
                        <Text>{item.address}</Text>
                    </PurshaseInfo>
                    <Text>{item.price}</Text>
                </Purshase>
            )
    }
    return (
        <Container>
            <Header>
                <ProfilePhoto source={require("../../assets/logo.png")}/>
                <Welcome>
                    <Text heavy medium>Welcome,</Text>
                    <Text>Khalil</Text>
                </Welcome>
                <FontAwesome5 name="cog" size={24} color="#565656"/>
            </Header>

            <Text center title black>
                7,500.00 dh
            </Text>
            <Text center medium color="#727479">
                Current balance
            </Text>

            <Purshases ListHeaderComponent={
                <>
                    <TransactionsHeader>
                        <Text>Last Transactions</Text>
                        <MaterialIcons name="sort" size={24} color="#5196f4" />
                    </TransactionsHeader>
                    <SearchContainer>
                        <AntDesign name="search1" size={18} color="#5196f4" />
                        <Search placeHolder="Search transaction" />
                    </SearchContainer>
                </>
            }
                       data={TransactionData} renderItem={renderTransactions} showVerticalScrollIndicator={false}
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
`;

const PurshaseInfo = styled.View`
`;

const TransactionsHeader = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
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
