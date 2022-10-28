import styled from 'styled-components';
import Text from '../components/Text';
import {FontAwesome5,MaterialIcons , AntDesign} from "@expo/vector-icons";
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart,} from 'react-native-chart-kit';
import TransactionData from "../../TransactionsData";
import {Dimensions} from "react-native";

export default function HomeScreen() {
    const renderTransactions = ({item}) => {
        return (
                <Purshase>
                    <PurshaseInfo>
                        <Text heavy >{item.beneficiary}</Text>
                        <Text color="#727479">{item.bank}</Text>
                    </PurshaseInfo>
                    <PurshaseInfo>
                        <Text medium black large color="#228B22">{item.amount} {item.currency}</Text>
                        <Text heavy color="#727479">{item.date}</Text>
                    </PurshaseInfo>
                </Purshase>
            )
    }
    return (
        <Container>
            <Header>
                <ProfilePhoto source={require("../../assets/logo.png")}/>
                <Welcome>
                    <Text heavy medium>Welcome Khalil</Text>
                    <Text>User</Text>
                </Welcome>
                <FontAwesome5 name="cog" size={24} color="#565656"/>
            </Header>

            <Text center title black>
                7,500.00 MAD
            </Text>
            <Text center medium color="#727479">
                Current balance
            </Text>

            <Chart>
                <LineChart
                    data={{
                        labels: ['May','June','July','Aug','Sept','Oct'],
                        datasets : [
                            {
                                data : [
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                ],
                            },
                        ],
                    }}
                    width = {Dimensions.get("window").width}
                    height = {200}
                    yAxisLabel = "$"
                    yAxisSuffix = "k"
                    chartConfig = {{
                        backgroundGradientFrom : "#1e1e1e",
                        backgroundGradientTo : "#1e1e1e",
                        color : (opacity = 1) => `rgba(81,150,244,${opacity})`,
                        labelColor : () => `rgba(255,255,255,0.2)`,
                        strokeWidth : 3,
                    }}
                    widthVerticalLines = {false}
                    widthHorizontalLines = {false}
                    bezier
                />
            </Chart>

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
