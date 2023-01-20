import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Platform, FlatList
} from 'react-native';
import {useTranslation} from "react-i18next";
import Text from "../../components/Text";
import {AntDesign, Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import {BANKSDETAILS, BENEFICIARYDETAILS, USERDETAILS} from "../Common/commonValue";
import {getAccount} from "../../actions/AccountAction";
import {getTransactions} from "../../actions/TransactionAction";
import {MyContext} from "../../../Global/Context";
import styled from "styled-components/native";
import {getAllBeneficiaries} from "../../actions/BeneficiaryAction";


export const ChooseBeneficiary = ({modalVisible,hideModalAndStay,showModalAndLeave,addBeneficiary,beneficiaryOld,handleAddNewBeneficiary}) => {
    const {t} = useTranslation();
    const [selectedBank,setSelectedBank] = useState("SG");
    const [card,setCard] = useState([])
    const [nameCheck,setNameCheck] = useState(false)
    const [amountCheck,setAmountCheck] = useState(false)
    const [ribCheck,setRibCheck] = useState(false);
    const {transactions , setTransactions} = useContext(MyContext);
    const {beneficiaries , setBeneficiaries} = useContext(MyContext);
    const [beneficiary,setBeneficiary] = useState({
        name : "",
        amount : "",
        rib : "",
    })
    const renderTransactions = ({item}) => {
        return (
            <TouchableOpacity style={styles.beneficiaryList} onPress={() => chooseBeneficiary(item)}>
                <View>
                    <Text style={{color: "#0b0f17",fontWeight:"bold"}}>{item?.fullName}</Text>
                    <Text style={{color: "#0b0f17",fontWeight:"bold"}}>{item?.rib}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleAddInfo = (field,value) => {
        if(!value.isEmpty){
            if(field === BENEFICIARYDETAILS.RIB){
                setRibCheck(true);
                setBeneficiary({...beneficiary,ribBeneficiary: value});
            }
            if(field === BENEFICIARYDETAILS.NAME){
                setNameCheck(true);
                setBeneficiary({...beneficiary,nameBeneficiary: value});
            }
            if(field === BENEFICIARYDETAILS.AMOUNT){
                setAmountCheck(true);
                setBeneficiary({...beneficiary,amount: value});
            }
        }
    }
    const showAndLeaveAddTransfer = () => {
        addBeneficiary(beneficiary);
        showModalAndLeave(false);
    }
    const handleCancel = () => {
        showModalAndLeave(false);
    }


    // Choose the selected beneficiary
    const chooseBeneficiary = (beneficiary) => {
        console.log("beneficiary",beneficiary);
        addBeneficiary(beneficiary);
        handleAddNewBeneficiary();
    }


    useEffect(() => {
        console.log("beneficiaryOld",beneficiaryOld);
        getAllBeneficiaries().then(ben => setBeneficiaries(ben));
        console.log("beneficiaries",beneficiaries)
    }, [])

    return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text center large bold color="black" margin="0 0 10px 0">{t("Transfer.AddBeneficiary")}</Text>

                        <FlatList data={beneficiaries}
                                  renderItem={renderTransactions}
                                  showVerticalScrollIndicator={false}
                                  style={{padding:16}}
                        />

                        <View style={styles.buttons}>

                            <TouchableOpacity style={styles.buttonAddNewBenef}
                                              onPress={() => handleAddNewBeneficiary()}>
                                <Text style={[styles.textStyle,{color: "#0c0405"}]}>{t("Transfer.AddNewBeneficiary")}</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.buttons}>

                            <TouchableOpacity style={[styles.buttonCancel]}
                                              onPress={() => hideModalAndStay()}>
                                <Text style={[styles.textStyle,{color: "#890821"}]}>{t("Commun.Back")}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#1c3f60',
    },
    beneficiaryList : {
        flexDirection : "row",
        justifyContent :"space-between",
        borderBottomWidth : 1,
        borderColor : "#393939",
        paddingBottom : 10,
        margin : 12,
    },
    selectBank : {
        marginBottom : 200,
        height: 50,
        width: 300
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        flex : 1,
    },
    buttonAdd: {
        borderRadius: 20,
        borderWidth : 2,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 10,
        paddingBottom : 10,
        borderColor : "#1f7406",
        backgroundColor: "white",
        width :80,
        height:50,
        justifyContent:"center"

    },
    buttonCancel: {
        borderRadius: 20,
        borderWidth : 2,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 10,
        paddingBottom : 10,
        borderColor : "#890821",
        width :80,
        justifyContent:"center"
    },
    buttonAddNewBenef: {
        borderRadius: 20,
        borderWidth : 2,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 10,
        paddingBottom : 10,
        borderColor : "#091808",
        justifyContent:"center"
    },
    buttons: {
        flexDirection :"row",
        justifyContent : "space-between",
        alignItems : "center",
        paddingTop : 20,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignItems:"center",
    },
    textInput : {
        flex : 1,
        marginTop : Platform.OS === 'ios' ? 0 : -12,
        paddingLeft : 10,
        color : "#05375a",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    action : {
        flexDirection : "row",
        width : "100%",
        justifyContent : "space-around",
        marginTop : 10,
        borderBottomWidth : 1,
        borderBottomColor : "#f2f2f2",
        paddingBottom : 16,
    },
    text_footer : {
        color : "#05375a",
        fontSize : '17',
    },

})
