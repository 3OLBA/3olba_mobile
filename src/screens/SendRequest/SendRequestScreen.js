import styled from 'styled-components';
import Text from '../../components/Text';
import NumberPad from '../../components/NumberPad';
import React, {useState} from 'react';
import HeaderScreen from "../Common/HeaderScreen";
import { AntDesign , FontAwesome,Ionicons } from '@expo/vector-icons';

export default function SendRequestScreen({navigation}) {
    const screenName = "Transfer";
    const currentAmount = 750000;
    const [amount,setAmount]   = useState("0");
    const [beneficiary,setBeneficiary]   = useState({});
    const user = {"name":"Khalil","amount":1000,"iban":"234 567 123456789 89"};


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

            <HeaderScreen navigation={navigation} screenName={screenName}/>

            <Amount>
                <Text center title heavy>7,500.00 MAD</Text>
                <Text bold color="#727479">Current balance</Text>
            </Amount>

            <User>
                <ProfileLogo>
                    <AntDesign name="user" size={35} color="white" />
                </ProfileLogo>
                <UserDetails>
                    <Text bold heavy>Name : {user.name} </Text>
                    <Text bold heavy>Amount : {user.amount} </Text>
                    <Text bold heavy color="#727479">IBAN : {user.iban} </Text>
                </UserDetails>
            </User>

            <ButtonsTransfer>
                <BeneficiaryButton>
                    <Ionicons name="add-circle-outline" size={20} color="white" />
                    <SendButtonText>
                        <Text bold heavy>Beneficiary</Text>
                    </SendButtonText>
                </BeneficiaryButton>
                <SendButton>
                    <FontAwesome name="send-o" size={20} color="white" />
                    <SendButtonText>
                        <Text bold heavy>Send </Text>
                    </SendButtonText>
                </SendButton>
            </ButtonsTransfer>

            {/*<NumberPad onPress={pressKey}/>*/}
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
    padding : 16px 32px;
    align-items : center;
    border-radius : 12px;
    background-color : #3d3d3d;
`;

const UserDetails = styled.View`
    flex : 1;
    margin : 0px 16px;
`;

const ProfileLogo = styled.View`
    width : 60px;
    height : 60px;
    border-radius : 60px;
    justify-content : center;
    align-items : center;
`;

const BeneficiaryButton = styled.TouchableOpacity`
    margin : 16px;
    background-color : #3d3d3d;
    padding : 16px 32px;
    align-items : center;
    border-radius : 12px;
    flex-direction : row;
`;
const SendButtonText = styled.View`
    margin-left: 10px;
`;
const BeneficiaryButtonText = styled.View`
    margin-left: 10px;
`;
const SendButton = styled.TouchableOpacity`
    flex-direction : row;
    margin : 16px;
    background-color : #3d3d3d;
    padding : 16px 32px;
    align-items : center;
    border-radius : 12px;
    justify-content : center;
`;

const ButtonsTransfer = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;

const StatusBar = styled.StatusBar``;
