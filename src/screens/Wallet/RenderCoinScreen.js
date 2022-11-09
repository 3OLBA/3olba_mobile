import Text from "../../components/Text";
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';

export default function RenderCoinScreen({item}) {

    return (
        <CoinContainer>
            <CoinInfo>
                <CoinDetails>
                    <Text center large heavy>{item.price} {item.currency} </Text>
                </CoinDetails>
                <CoinLogoContainer>
                    <CoinLogo source={item.logo} resizeMode="contain"/>
                </CoinLogoContainer>

            </CoinInfo>
            <CoinActions>
                <CoinBuy>
                    <Entypo name="shopping-cart" size={15} color="white" />
                </CoinBuy>
            </CoinActions>
        </CoinContainer>
    )
}

const CoinContainer = styled.View`
    background-color : #292929;
    margin-top : 32px;
    padding : 16px;
    border-radius : 8px
`;

const CoinInfo = styled.View`
    flex-direction : row;
    align-items : center;
    border-bottom-width : 1px;
    border-bottom-color : #393939;
    padding-bottom : 12px;
    margin-bottom : 12px;
`;

const CoinLogoContainer = styled.View`
    width : 55px;
    height : 55px;
    background-color : #727479;
    justify-content : center;
    align-items : center;
    border-radius : 32px;
`;

const CoinLogo = styled.Image`
    width : 55px;
    height : 55px;
`;

const CoinDetails = styled.View`
    flex : 1;
    width : 64px;
    height : 64px;
    border-radius : 32px;
    align-items : center;
    justify-content : center;
    margin : 5px 20px;
    border-width : 1px;
    border-color : #ffffff20;
`;

const CoinActions = styled.View`
    flex-direction : row;
    justify-content : flex-end;
    align-items : center;
`;

const CoinBuy = styled.TouchableOpacity`
    padding : 8px 16px;
    border-radius : 6px; 
    margin-left : 10px;
    margin-right : 10px;
    background-color : #4169E1;
`;
