import styled from 'styled-components/native';
import Text from '../../components/Text';
import NumberPad from '../../components/NumberPad';
import React, {useContext, useState} from 'react';
import HeaderScreen from "../Common/HeaderScreen";
import { AntDesign , FontAwesome,Ionicons } from '@expo/vector-icons';
import {useTranslation} from "react-i18next";
import {MyContext} from "../../../Global/Context";
import {AddCarte} from "../Modal/AddCarte";
import {AddTransfer} from "../Modal/AddTransfer";
import {SendTransfer} from "../Modal/SendTransfer";
import {createTransfer} from "../../actions/TransactionAction";
import {FlatList,View} from "react-native";
import {ChooseBeneficiary} from "../Modal/ChooseBeneficiary";

export default function TransferScreen({navigation}) {
    const {t} = useTranslation();
    const screenName = t("Transfer.Transfer");
    const currentAmount = 750000;
    const [amount,setAmount]   = useState("0");
    const [modalVisible,setModalVisible]   = useState(false);
    const [modalChooseBenVisible,setModalChooseBenVisible]   = useState(false);
    const [modalSendVisible,setModalSendVisible]   = useState(false);
    const user = {"name":"Khalil","amount":100000,"currency":"MAD","iban":"234 567 123456789 89"};
    const {account , setAccount} = useContext(MyContext);
    const {transactions , setTransactions} = useContext(MyContext);
    const [beneficiary,setBeneficiary] = useState({
        ribBeneficiary : "",
        nameBeneficiary: "",
        amount : "",
    });

    const pressKey = (item,index) => {
        setAmount((prev) =>{
            return index !== 10 ? prev + item : prev.slice(0,prev.length - 1);
        });
    }
    const addBeneficiary = (beneficiary) => {
        console.log("beneficiary",beneficiary)
        setBeneficiary(beneficiary);
    }

    const convertToMAD = (currentAmount) => {
        if(currentAmount){
            const newAmount = (currentAmount / 100) * 100;
            return newAmount.toLocaleString("en-US", {style : "currency",currency : "MAD"});
        }else{
            return "";
        }
    }
    const showModalAndLeave = () => {
        if(modalVisible){
            setModalVisible(false);
            setModalSendVisible(false);
            navigation.navigate("Transfer");
        }
        else if(!modalVisible){
            setModalVisible(true);
        }
    }
    const hideModalAndStay = () => {
        setModalVisible(false);
        setModalSendVisible(false);
        setModalChooseBenVisible(false);
    }

    // Send transfer
    const sendTransfer = () => {
        if(modalSendVisible && beneficiary){
            setModalSendVisible(false);
            navigation.navigate("Transfer");
            createTransfer(beneficiary).then(r => console.log("result create transfer",r))
        }
        else if(!modalVisible){
            setModalSendVisible(true);
        }
    }

    // Check if the beneficiary is exist
    const beneficiaryIsExist = () => {
        return beneficiary?.name && beneficiary?.rib && beneficiary?.name;
    }

    const handleAddNewBeneficiary = () => {
        setModalVisible(true);
        setModalChooseBenVisible(false);
    }

    return (
        <Container>

            <HeaderScreen navigation={navigation} screenName={screenName}/>

            <Amount>
                <Text center title heavy>{account?.amount} {t("Commun.MAD")}</Text>
                <Text bold color="#727479">{t("Commun.CurrentBalance")}</Text>
            </Amount>

            <User>
                <ProfileLogo>
                    <AntDesign name="user" size={35} color="white" />
                </ProfileLogo>
                <UserDetails>
                    <Text bold heavy style={{paddingBottom:8}}>{t("Transfer.Name")} : {beneficiary?.nameBeneficiary} </Text>
                    <Text bold heavy style={{paddingBottom:8}}>{t("Transfer.Amount")} : {convertToMAD(beneficiary?.amount)}</Text>
                    <Text bold heavy color="#727479" style={{paddingBottom:8}}>{t("Transfer.RIB")} : {beneficiary?.ribBeneficiary} </Text>
                </UserDetails>
            </User>

            <ButtonsTransfer>
                <BeneficiaryButton onPress={() => setModalChooseBenVisible(true)}>
                    <Ionicons name="add-circle-outline" size={20} color="white" />
                    <SendButtonText>
                        <Text bold heavy>{t("Transfer.Beneficiary")}</Text>
                    </SendButtonText>
                </BeneficiaryButton>
                <SendButton onPress={() => setModalSendVisible(true)}>
                    <FontAwesome name="send-o" size={20} color="white" />
                    <SendButtonText>
                        <Text bold heavy>{t("Transfer.Send")} </Text>
                    </SendButtonText>
                </SendButton>
            </ButtonsTransfer>

            <AddTransfer navigation={navigation}
                         modalVisible={modalVisible}
                         addBeneficiary={addBeneficiary}
                         beneficiaryOld={beneficiary}
                         hideModalAndStay={hideModalAndStay}
                         showModalAndLeave={showModalAndLeave}/>

            <ChooseBeneficiary navigation={navigation}
                         modalVisible={modalChooseBenVisible}
                         handleAddNewBeneficiary={handleAddNewBeneficiary}
                         addBeneficiary={addBeneficiary}
                         beneficiaryOld={beneficiary}
                         hideModalAndStay={hideModalAndStay}
                         showModalAndLeave={showModalAndLeave}/>

            {beneficiaryIsExist &&
                <SendTransfer navigation={navigation}
                              modalVisible={modalSendVisible}
                              hideModalAndStay={hideModalAndStay}
                              sendTransfer={sendTransfer}
                />
            }

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
