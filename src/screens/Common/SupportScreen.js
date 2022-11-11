import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import {MaterialIcons} from '@expo/vector-icons';
import {useTranslation} from "react-i18next";

export const SupportScreen = ({navigation}) => {
    const {t} = useTranslation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate("Start")} style={styles.support}>
            <MaterialIcons name="contact-support"size={20} color="#1c3f60"/>
            <Text center medium black color="#1c3f60">
                {t("Commun.Support")}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    support : {
        flexDirection :"row",
        justifyContent : "center",
        alignItems : "center",
        marginTop:10,
    },

})
