import React from 'react';
import {View, StyleSheet, TouchableOpacity, Modal, TextInput} from 'react-native';
import {useTranslation} from "react-i18next";
import Text from "../../../components/Text";
import {Feather, FontAwesome} from "@expo/vector-icons";
import {USERDETAILS} from "../../Common/commonValue";


export const AddCarte = ({modalVisible,hideModalAndStay,showModalAndLeave}) => {
    const {t} = useTranslation();

    return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text center large bold color="black" margin="0 0 10px 0">{t("Cards.AddCard")}</Text>
                        <View style={styles.action}>
                            <FontAwesome name="credit-card" size={20} color="#05375a" />
                            <TextInput style={styles.textInput}
                                           // onChangeText={value => handleSignUp(USERDETAILS.PHONE_NUMBER,value)}
                                           placeholder="Your IBAN"
                                           autoCapitalize="none"
                                           keyboardType="phone-pad"
                                />
                            <Feather name="check-circle" color={"#4e4c4c"} size={22}/>
                        </View>
                        <View style={styles.buttons}>

                            <TouchableOpacity style={[styles.buttonCancel]}
                                onPress={() => hideModalAndStay()}>
                                <Text style={[styles.textStyle,{color: "#890821"}]}>{t("Commun.Cancel")}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonAdd]}
                                onPress={() => showModalAndLeave()}>
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
        justifyContent : "space-around",
        marginTop : 10,
        marginBottom: 30,
        borderBottomWidth : 1,
        borderBottomColor : "#f2f2f2",
        paddingBottom : 5,
    },
    text_footer : {
        color : "#05375a",
        fontSize : 17,
    },

})
