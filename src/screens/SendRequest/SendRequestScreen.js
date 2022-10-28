import styled from 'styled-components';
import Text from '../../components/Text';
import CardsScreen from "../Cards/CardsScreen";

export default function SendRequestScreen() {


    return (
        <Container>
            <Text>Send Request</Text>
            <Cards/>

            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #1e1e1e
`;

const Cards = styled.FlatList``;

const StatusBar = styled.StatusBar``;
