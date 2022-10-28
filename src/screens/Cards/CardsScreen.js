import styled from 'styled-components';
import Text from '../../components/Text';
import myCards from '../../../CardsData';
import { FontAwesome,Entypo } from '@expo/vector-icons';
import HeaderScreen from "../Common/HeaderScreen";

export default function CardsScreen() {
    const renderCards = ({ item }) => {
        return (
            <CardContainer>
                <CardInfo>
                    <CardLogoContainer>
                        <CardLogo source={item.logo} resizeMode="contain"/>
                    </CardLogoContainer>
                    <CardDetails>
                        <Text medium black large >{item.iban}</Text>
                        <Text heavy color="#727479">{item.bank}</Text>
                        <Text heavy color="#727479">{item.date}</Text>
                    </CardDetails>
                </CardInfo>
                <CardActions>
                    <CardUpdate>
                        <Entypo name="pencil" size={20} color="white" />
                    </CardUpdate>
                    <CardRemove>
                        <FontAwesome name="remove" size={20} color="#F0FFF0" />
                    </CardRemove>
                </CardActions>
            </CardContainer>
        )
    }

    return (
        <Container>
            <Text center large heavy margin="16px 0 0 0">My Cards</Text>
            <HeaderScreen/>
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

const CardContainer = styled.View`
    background-color : #292929;
    margin-top : 32px;
    padding : 16px;
    border-radius : 8px
`;

const CardInfo = styled.View`
    flex-direction : row;
    align-items : center;
    border-bottom-width : 1px;
    border-bottom-color : #393939;
    padding-bottom : 12px;
    margin-bottom : 12px;
`;

const CardLogoContainer = styled.View`
    width : 64px;
    height : 64px;
    background-color : #727479;
    justify-content : center;
    align-items : center;
    border-radius : 32px;
`;

const CardLogo = styled.Image`
    width : 40px;
    height : 40px;
`;

const CardDetails = styled.View`
    flex : 1;
    align-items : flex-end;
`;

const CardActions = styled.View`
    flex-direction : row;
    justify-content : flex-end;
    align-items : center;
`;

const CardUpdate = styled.TouchableOpacity`    
    background-color : #3d3d3d;
    padding : 8px 16px;
    border-radius : 6px; 
`;

const CardRemove = styled.TouchableOpacity`
    padding : 8px 16px;
    border-radius : 6px; 
    margin-left : 10px;
    margin-right : 10px;
    background-color : #B22222;
`;

const StatusBar = styled.StatusBar``;
