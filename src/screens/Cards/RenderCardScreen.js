import Text from "../../components/Text";
import {Entypo, FontAwesome5} from "@expo/vector-icons";
import styled from "styled-components";

export default function RenderCardScreen({item}) {

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
                    <Entypo name="pencil" size={15} color="white" />
                </CardUpdate>
                <CardRemove>
                    <FontAwesome5 name="trash" size={15} color="white" />
                </CardRemove>
            </CardActions>
        </CardContainer>
    )
}

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
