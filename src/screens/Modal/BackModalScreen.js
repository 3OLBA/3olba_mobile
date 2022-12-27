import React from 'react';
import {View, StyleSheet, TouchableOpacity, Modal,Text} from 'react-native';

export const BackModalScreen = ({modalVisible,hideModalAndStay,showModalAndLeave}) => {
    return (
            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Closing this window may discard your changes ?</Text>
                        <View style={styles.buttons}>

                            <TouchableOpacity style={[styles.buttonCancel]}
                                onPress={() => hideModalAndStay()}>
                                <Text style={[styles.textStyle,{color: "#1c3f60"}]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.buttonDiscard]}
                                onPress={() => showModalAndLeave()}>
                                <Text style={[styles.textStyle,{color: "#b43232"}]}>Discard</Text>
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
        marginBottom: 15,
        textAlign: "center"
    }

})
