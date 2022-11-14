import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal, TextInput,Keyboard,TouchableWithoutFeedback} from 'react-native';
import {useTranslation} from "react-i18next";
import Text from "../../../components/Text";
import {Feather, FontAwesome} from "@expo/vector-icons";
import {BANKSDETAILS, USERDETAILS} from "../../Common/commonValue";
import {Picker} from "@react-native-picker/picker";
import banksType  from '../../../../BankTypeData';

import SelectDropdown from 'react-native-select-dropdown'
import {RetrieveData, RetrieveJsonData, StoreData, StoreJsonData} from "../../../components/StoreData";
import {addCard, addOrModifyCard, deleteCard, getMoviesFromApi} from "../../../actions/CardActions";



export const AddCarte = ({modalVisible,hideModalAndStay,showModalAndLeave}) => {
    const {t} = useTranslation();
    const [selectedBank,setSelectedBank] = useState("SG");
    const [card,setCard] = useState([])

    const scrollBanksType = (type) => {
        setSelectedBank(type);
        Keyboard.dismiss();
        handleAddCard(BANKSDETAILS.TYPE,type);
    }
    const handleAddCard = (field,value) => {
        console.log("rib",value)
        if(field === BANKSDETAILS.RIB){
            setCard({...card,rib:value})
        }
        if(field === BANKSDETAILS.TYPE){
            setCard({...card,bankType:value})
        }
    }
    const showModalAndLeave1 = () => {
        console.log("card",card);
        showModalAndLeave(false);
        // addOrModifyCard(card);
        deleteCard(card?.rib);
        // StoreJsonData("cards",card)
    }

    return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text center large bold color="black" margin="0 0 10px 0">{t("Cards.AddCard")}</Text>

                        <TouchableWithoutFeedback accessible={false}>
                            <View style={styles.action}>
                                <FontAwesome name="credit-card" size={20} color="#05375a" />
                                <TextInput style={[styles.textInput,{width:"80%",paddingLeft:2}]}
                                           onChangeText={value => handleAddCard(BANKSDETAILS.RIB,value)}
                                           placeholder="Your IBAN"
                                           autoCapitalize="none"
                                           keyboardType="numeric"
                                           maxLength={14}
                                />
                                <Feather name="check-circle" color={"#4e4c4c"} size={22}/>
                            </View>
                        </TouchableWithoutFeedback>

                        <Picker  style={styles.selectBank} selectedValue={selectedBank}
                                onValueChange={(itemValue, itemIndex) => scrollBanksType(itemValue)}>
                            {banksType.map((bank,key) => {
                                return (
                                        <Picker.Item label={bank.description} value={bank.code} key={bank.id} />
                                )
                            })}
                        </Picker>

                        <View style={styles.buttons}>

                            <TouchableOpacity style={[styles.buttonCancel]}
                                onPress={() => hideModalAndStay()}>
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
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignItems:"center",
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
        paddingBottom : 5,
    },
    text_footer : {
        color : "#05375a",
        fontSize : 17,
    },

})
