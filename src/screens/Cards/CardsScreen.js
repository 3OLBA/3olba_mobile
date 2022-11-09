import styled from 'styled-components/native';
import myCards from '../../../CardsData';
import HeaderScreen from "../Common/HeaderScreen";
import RenderCardScreen from "./RenderCardScreen";

export default function CardsScreen({navigation}) {
    const screenName = "My Cards";
    const renderCards = ({ item }) => {
        return (
            <RenderCardScreen item={item}/>
        )
    }

    return (
        <Container>
            <HeaderScreen screenName={screenName} navigation={navigation}/>
            <Cards data={myCards} renderItem={renderCards}/>
            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #1e1e1e
`;

const Cards = styled.FlatList`
    padding : 0 8px;
`;

const StatusBar = styled.StatusBar``;
