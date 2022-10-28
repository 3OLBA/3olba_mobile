import styled from 'styled-components';
import Text from '../../components/Text';
import NumberPad from '../../components/NumberPad';
import React, {useState} from 'react';
import HeaderScreen from "../Common/HeaderScreen";

export default function SendRequestScreen({navigation}) {
    const [amount,setAmount]   = useState("0");
    const pressKey = (item,index) => {
        setAmount((prev) =>{
            return index !== 10 ? prev + item : prev.slice(0,prev.length - 1);
        });
    }

    const convertToMAD = (currentAmount) => {
        const newAmount = currentAmount / 100;
        return newAmount.toLocaleString("en-US", {style : "currency",currency : "MAD"});
    }
    return (
        <Container>
            <Text center large heavy margin="16px 0 0 0">Send Request</Text>

            <HeaderScreen navigation={navigation}/>

            <Amount>
                <Text center title heavy>{convertToMAD(amount)}</Text>
                <Text bold color="#727479">Choose amount to send</Text>
            </Amount>

            {/*<User>*/}
            {/*    <ProfilePhoto source={require("../../../assets/logo.png")}/>*/}
            {/*    <UserDetails>*/}
            {/*        <Text>Khalil</Text>*/}
            {/*        <Text bold color="#727479">Petreon</Text>*/}
            {/*    </UserDetails>*/}
            {/*</User>*/}

            <Send>
                <Text>Send {convertToMAD(amount)}</Text>
            </Send>
            <NumberPad onPress={pressKey}/>
            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #1e1e1e
`;

const Amount = styled.View`
    align-items : center;
`;

const User = styled.View`
    margin : 32px 16px;
    flex-direction : row;
    align-items : center;
`;

const UserDetails = styled.View`
    flex : 1;
    margin : 0px 16px;
`;

const ProfilePhoto = styled.Image`
    width : 60px;
    height : 60px;
    border-radius : 60px;
`;

const Send = styled.TouchableOpacity`
    margin : 16px;
    background-color : #5196f4;
    padding : 16px 32px;
    align-items : center;
    border-radius : 12px;
`;


const StatusBar = styled.StatusBar``;
