import React from 'react';
import {View, StyleSheet, TouchableOpacity, Modal,Text} from 'react-native';
import {useTranslation} from "react-i18next";

export const SubmitModal = ({success,hideModalSubmitAndLeave}) => {
    const {t} = useTranslation();
    return (
            <Modal animationType="slide"
                transparent={true}
                visible={success}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{t("LoginScreen.createdYourAccount")}</Text>
                        <View style={styles.buttons}>

                            <TouchableOpacity style={[styles.buttonCancel]}
                                onPress={() => hideModalSubmitAndLeave()}>
                                <Text style={[styles.textStyle,{color: "#1c3f60"}]}>{t("Commun.Continue")}</Text>
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
    buttonDiscard: {
        borderRadius: 20,
        borderWidth : 1,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 10,
        paddingBottom : 10,
        borderColor : "#1c3f60",
        backgroundColor: "white",

    },
    buttonCancel: {
        borderRadius: 20,
        borderWidth : 1,
        paddingLeft : 10,
        paddingRight : 10,
        paddingTop : 10,
        paddingBottom : 10,
        marginRight : 20,
        borderColor : "#a3a6a8"
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
        textAlign: "center"
    },
    modalText: {
        color:"#479910",
        fontWeight:"bold",
        marginBottom: 15,
        textAlign: "center"
    }

})
