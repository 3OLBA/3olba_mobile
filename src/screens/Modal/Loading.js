import React from 'react';
import {View, StyleSheet, ActivityIndicator, Modal,Text} from 'react-native';

export const Loading = ({loading}) => {
    return (
            <Modal animationType="slide"
                transparent={true}
                visible={loading}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" animating={true} color="#1c3f60"/>
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})
