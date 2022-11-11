import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import {AntDesign} from '@expo/vector-icons';
import {useTranslation} from "react-i18next";

export const BackScreen = ({navigation,location}) => {
    const {t} = useTranslation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(location)} style={styles.support}>
            <AntDesign name="back" size={20} color="#1c3f60"/>
            <Text center medium black color="#1c3f60" margin='0 0 0 10px'>
                {t("Commun.ChangeLanguage")}
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
