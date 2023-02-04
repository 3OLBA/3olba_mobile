import styled from 'styled-components/native';
import Text from '../../components/Text';
import React, {useContext, useState} from 'react';
import HeaderScreen from "../Common/HeaderScreen";
import { AntDesign , FontAwesome,Ionicons } from '@expo/vector-icons';
import {useTranslation} from "react-i18next";
import {MyContext} from "../../../Global/Context";
import {AddTransfer} from "../Modal/AddTransfer";
import {SendTransfer} from "../Modal/SendTransfer";
import {createTransfer, getTransactions} from "../../actions/TransactionAction";
import {ChooseBeneficiary} from "../Modal/ChooseBeneficiary";
import {AddBeneficiary} from "../Modal/AddBeneficiary";
import {SubmitModal} from "../Modal/SubmitModal";
import {ModalStatus} from "../Common/commonValue";
import {getAccount} from "../../actions/AccountAction";

export default function TransferScreen({navigation}) {
    const {t} = useTranslation();
    const screenName = t("Transfer.Transfer");
    const [modalVisible,setModalVisible]   = useState(false);
    const [showAddTransfer,setShowAddTransfer]   = useState(false);
    const [modalChooseBenVisible,setModalChooseBenVisible]   = useState(false);
    const [modalSendVisible,setModalSendVisible]   = useState(false);
    const {account , setAccount} = useContext(MyContext);
    const [statusSendTransfer , setStatusSendTransfer] = useState(ModalStatus.INIT);
    const [message , setMessage] = useState("");
    const [isChosenBeneficiary , setIsChosenBeneficiary] = useState(false);
    const {transactions , setTransactions} = useContext(MyContext);
    const [beneficiary,setBeneficiary] = useState({
        fullName: "",
        rib : "",
        amount : "",
        chosen:false,
        id:"",
    });

    const addBeneficiary = (benef) => {
        setBeneficiary({...beneficiary,fullName: benef?.fullName,
            rib: benef?.rib,amount: benef?.amount,
            id: benef?.id
        });
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
            setShowAddTransfer(false);
            navigation.navigate("Transfer");
        }
        else if(!modalVisible){
            setModalVisible(true);
        }
    }
    const showModalAddTransfer = () => {
        if(showAddTransfer){
            setShowAddTransfer(false);
            navigation.navigate("Transfer");
        }
        else if(!showAddTransfer){
            setShowAddTransfer(true);
        }
    }
    const hideModalAndStay = () => {
        setBeneficiary({});
        setModalVisible(false);
        setModalSendVisible(false);
        setModalChooseBenVisible(false);
        setShowAddTransfer(false);
    }
    const hideModalAndKeepBenef = () => {
        console.log("keep benef")
        setModalSendVisible(false);
    }

    const getInstance = () => {
        getAccount().then(response => setAccount(response));
        getTransactions().then(response => setTransactions(response));
    }

    // Send transfer
    const sendTransfer = () => {
        if(modalSendVisible && beneficiary){
            setModalSendVisible(false);
            navigation.navigate("Transfer");
            createTransfer(beneficiary).then(r => {
                if(r?.success){
                    setStatusSendTransfer(ModalStatus.SUCCESS);
                    setMessage(t("Transfer.SendTransferSuccess"));
                    getInstance();
                }else{
                    setStatusSendTransfer(ModalStatus.FAILED);
                    setMessage(t("Transfer.SendTransferFailed"))
                }
            })
        }
        else if(!modalVisible){
            setModalSendVisible(true);
        }
    }

    const handleAddNewBeneficiary = () => {
        setModalVisible(true);
        setModalChooseBenVisible(false);
    }

    const handleIfChooseBeneficiary = () => {
        setModalVisible(false);
        setShowAddTransfer(true);
        setIsChosenBeneficiary(true);
    }
    const handleIfNotChooseBeneficiary = () => {
        setIsChosenBeneficiary(false);
    }

    const addNewBeneficiary = () => {
        setBeneficiary({});
        setModalChooseBenVisible(true);
    }
    const hideModalSubmitAndLeave = () => {
        if(statusSendTransfer === ModalStatus.SUCCESS){
            hideModalAndStay();
            navigation.navigate("Home");
        }
        setStatusSendTransfer(ModalStatus.INIT);
    }

    // In case send button clicked without adding beneficiary
    const handleSendTransfer = () => {
        if(beneficiary?.amount && beneficiary?.amount !== ""){
            setModalSendVisible(true);
        }else{
            setStatusSendTransfer(ModalStatus.FAILED);
            setMessage(t("Transfer.AddBeneficiraryMessage"));
        }
    }

    return (
        <Container>

            <HeaderScreen navigation={navigation} screenName={screenName}/>

            <Amount>
                <Text center title heavy>{account?.amount} {t("Commun.MAD")}</Text>
                <Text bold color="#727479">{t("Commun.CurrentBalance")}</Text>
            </Amount>

            {(beneficiary?.amount && beneficiary?.amount !== "") &&
                <User>
                    <ProfileLogo>
                        <AntDesign name="user" size={35} color="white"/>
                    </ProfileLogo>
                    <UserDetails>
                        <Text bold heavy
                              style={{paddingBottom: 8}}>{t("Transfer.Name")} : {beneficiary?.fullName} </Text>
                        <Text bold heavy
                              style={{paddingBottom: 8}}>{t("Transfer.Amount")} : {convertToMAD(beneficiary?.amount)}</Text>
                        <Text bold heavy color="#727479"
                              style={{paddingBottom: 8}}>{t("Transfer.RIB")} : {beneficiary?.rib} </Text>
                    </UserDetails>
                </User>
            }

            <ButtonsTransfer>
                <BeneficiaryButton onPress={() => addNewBeneficiary()}>
                    <Ionicons name="add-circle-outline" size={20} color="white" />
                    <SendButtonText>
                        <Text bold heavy>{t("Transfer.Beneficiary")}</Text>
                    </SendButtonText>
                </BeneficiaryButton>
                <SendButton onPress={() => handleSendTransfer()} >
                    <FontAwesome name="send-o" size={20} color="white" />
                    <SendButtonText>
                        <Text bold heavy>{t("Transfer.Send")} </Text>
                    </SendButtonText>
                </SendButton>
            </ButtonsTransfer>

            <AddTransfer navigation={navigation}
                         modalVisible={showAddTransfer}
                         addBeneficiary={addBeneficiary}
                         beneficiaryOld={beneficiary}
                         isChosenBeneficiary={isChosenBeneficiary}
                         handleIfNotChooseBeneficiary={handleIfNotChooseBeneficiary}
                         hideModalAndStay={hideModalAndStay}
                         showModalAndLeave={showModalAndLeave}/>

            <AddBeneficiary navigation={navigation}
                         modalVisible={modalVisible}
                         addBeneficiary={addBeneficiary}
                         beneficiaryOld={beneficiary}
                         isChosenBeneficiary={isChosenBeneficiary}
                         handleIfNotChooseBeneficiary={handleIfNotChooseBeneficiary}
                         hideModalAndStay={hideModalAndStay}
                         showModalAndLeave={showModalAndLeave}/>

            <ChooseBeneficiary navigation={navigation}
                               showModalAddTransfer={showModalAddTransfer}
                               modalVisible={modalChooseBenVisible}
                               handleIfChooseBeneficiary={handleIfChooseBeneficiary}
                               handleAddNewBeneficiary={handleAddNewBeneficiary}
                               addBeneficiary={addBeneficiary}
                               beneficiaryOld={beneficiary}
                               hideModalAndStay={hideModalAndStay}
                               showModalAndLeave={showModalAndLeave}/>

                <SendTransfer navigation={navigation}
                              modalVisible={modalSendVisible}
                              hideModalAndStay={hideModalAndKeepBenef}
                              sendTransfer={sendTransfer}
                />

            <SubmitModal status={statusSendTransfer} hideModalSubmitAndLeave={hideModalSubmitAndLeave} message={message}/>

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
