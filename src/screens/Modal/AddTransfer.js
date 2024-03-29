import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';
import {useTranslation} from "react-i18next";
import Text from "../../components/Text";
import {AntDesign, Feather, FontAwesome} from "@expo/vector-icons";
import {BANKSDETAILS, BENEFICIARYDETAILS, USERDETAILS} from "../Common/commonValue";
import {getAccount} from "../../actions/AccountAction";
import {getTransactions} from "../../actions/TransactionAction";


export const AddTransfer = ({modalVisible,hideModalAndStay,
                                showModalAndLeave,addBeneficiary,
                                beneficiaryOld,isChosenBeneficiary,
                                handleIfNotChooseBeneficiary}) => {
    const {t} = useTranslation();
    const [selectedBank,setSelectedBank] = useState("SG");
    const [card,setCard] = useState([])
    const [nameCheck,setNameCheck] = useState(false)
    const [amountCheck,setAmountCheck] = useState(false)
    const [ribCheck,setRibCheck] = useState(false);
    const [beneficiary,setBeneficiary] = useState({
        fullName : "",
        rib : "",
        amount : "",
        chosen : false,
        id : "",
    })

    const handleAddInfo = (field,value) => {
         if(!value.isEmpty){
            if(field === BENEFICIARYDETAILS.RIB && isChosenBeneficiaryNotExist){
                console.log("value",value)
                setRibCheck(true);
                setBeneficiary({...beneficiary,rib: value});
            }
            if(field === BENEFICIARYDETAILS.NAME && isChosenBeneficiaryNotExist){
                console.log("NAMEEEE",value)
                setNameCheck(true);
                setBeneficiary({...beneficiary,fullName: value});
            }
            if(field === BENEFICIARYDETAILS.AMOUNT){
                setAmountCheck(true);
                setBeneficiary({...beneficiary,amount: value});
            }
        }

        console.log("new Benef",beneficiary)

    }

    const showAndLeaveAddTransfer = () => {
        console.log("BENEF",beneficiary);
        handleIfNotChooseBeneficiary();
        addBeneficiary(beneficiary);
        setBeneficiary({})
        showModalAndLeave(false);
    }

    const handleCancel = () => {
        hideModalAndStay();
        setRibCheck(false);
        setNameCheck(false);
        setAmountCheck(false);
    }

    const isChosenBeneficiaryExist = () => {
        return !beneficiaryOld?.rib?.isEmpty && !beneficiaryOld?.rib?.isEmpty;
    }

    const isChosenBeneficiaryNotExist = () => {
        return beneficiaryOld === null || beneficiaryOld === undefined
            || beneficiaryOld?.rib === null || beneficiaryOld?.rib === "" || beneficiaryOld?.rib === undefined;
    }

    useEffect(() => {
        console.log("beneficiaryOld",beneficiaryOld)
        if(isChosenBeneficiaryExist){
            setBeneficiary({...beneficiary, fullName: beneficiaryOld?.fullName,
                rib: beneficiaryOld?.rib,chosen:true,
                id: beneficiaryOld?.id});
        }
    },[beneficiaryOld])

    return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text center large bold color="black" margin="0 0 10px 0">{t("Transfer.AddTransfer")}</Text>


                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <AntDesign name="user" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:10}]}
                                           onChangeText={value => handleAddInfo(BENEFICIARYDETAILS.NAME,value)}
                                           placeholder={t("Transfer.BeneficiaryName")}
                                           placeholderTextColor="#747171"
                                           autoCapitalize="none"
                                           keyboardType="text"
                                           value={beneficiaryOld?.fullName}
                                           editable={!isChosenBeneficiary}
                                           maxLength={14}
                                />
                                <Feather name="check-circle" color={ribCheck ? "#75d219" : "#4e4c4c"} size={22}/>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <FontAwesome name="credit-card" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:10}]}
                                           onChangeText={value => handleAddInfo(BENEFICIARYDETAILS.RIB,value)}
                                           placeholder={t("Transfer.RIB")}
                                           placeholderTextColor="#747171"
                                           autoCapitalize="none"
                                           value={beneficiaryOld?.rib}
                                           editable={!isChosenBeneficiary}
                                           keyboardType="text"
                                           maxLength={14}
                                />
                                <Feather name="check-circle" color={ribCheck ? "#75d219" : "#4e4c4c"} size={22}/>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <FontAwesome name="money" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:10}]}
                                           onChangeText={value => handleAddInfo(BENEFICIARYDETAILS.AMOUNT,value)}
                                           placeholder={t("Transfer.Amount")}
                                           placeholderTextColor="#747171"
                                           autoCapitalize="none"
                                           keyboardType="numeric"
                                           returnKeyType="done"
                                           maxLength={14}
                                />
                                <Feather name="check-circle" color={amountCheck ? "#75d219" : "#4e4c4c"} size={22}/>
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={styles.buttons}>

                            <TouchableOpacity style={[styles.buttonCancel]}
                                onPress={() => handleCancel()}>
                                <Text style={[styles.textStyle,{color: "#890821"}]}>{t("Commun.Cancel")}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonAdd]}
                                onPress={() => showAndLeaveAddTransfer()}>
                                <Text style={[styles.textStyle,{color: "#1f7406"}]}>{t("Commun.Add")}</Text>
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
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
        marginRight : 20,
        borderColor : "#890821",
        width :80,
        height:50,
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
        fontSize:16
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
