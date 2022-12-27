import React, {useState} from 'react';
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


export const AddTransfer = ({modalVisible,hideModalAndStay,showModalAndLeave,addBeneficiary}) => {
    const {t} = useTranslation();
    const [selectedBank,setSelectedBank] = useState("SG");
    const [card,setCard] = useState([])
    const [nameCheck,setNameCheck] = useState(false)
    const [amountCheck,setAmountCheck] = useState(false)
    const [ribCheck,setRibCheck] = useState(false);
    const [beneficiary,setBeneficiary] = useState({
        name : "",
        amount : "",
        rib : "",
    })

    const handleAddInfo = (field,value) => {
        if(!value.isEmpty){
            if(field === BENEFICIARYDETAILS.RIB){
                setRibCheck(true);
                setBeneficiary({...beneficiary,rib: value});
            }
            if(field === BENEFICIARYDETAILS.NAME){
                setNameCheck(true);
                setBeneficiary({...beneficiary,name: value});
            }
            if(field === BENEFICIARYDETAILS.AMOUNT){
                setAmountCheck(true);
                setBeneficiary({...beneficiary,amount: value});
            }
        }
    }
    const showModalAndLeave1 = () => {
        addBeneficiary(beneficiary);
        showModalAndLeave(false);
    }
    const handleCancel = () => {
        hideModalAndStay();
        setRibCheck(false);
        setNameCheck(false);
        setAmountCheck(false);
    }

    return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text center large bold color="black" margin="0 0 10px 0">{t("Transfer.AddTransfer")}</Text>

                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <AntDesign name="user" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:2}]}
                                           onChangeText={value => handleAddInfo(BENEFICIARYDETAILS.NAME,value)}
                                           placeholder="Beneficiary name"
                                           autoCapitalize="none"
                                           keyboardType="text"
                                           maxLength={14}
                                />
                                <Feather name="check-circle" color={ribCheck ? "#75d219" : "#4e4c4c"} size={22}/>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <FontAwesome name="credit-card" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:2}]}
                                           onChangeText={value => handleAddInfo(BENEFICIARYDETAILS.RIB,value)}
                                           placeholder="Your IBAN"
                                           autoCapitalize="none"
                                           keyboardType="text"
                                           maxLength={14}
                                />
                                <Feather name="check-circle" color={ribCheck ? "#75d219" : "#4e4c4c"} size={22}/>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <FontAwesome name="money" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:2}]}
                                           onChangeText={value => handleAddInfo(BENEFICIARYDETAILS.AMOUNT,value)}
                                           placeholder="Your Amount"
                                           autoCapitalize="none"
                                           keyboardType="text"
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
                                onPress={() => showModalAndLeave1()}>
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
