import React,{useState} from 'react';
import styled from 'styled-components/native';
import {Fontisto,AntDesign} from '@expo/vector-icons';
import Text from '../../components/Text';
import {View, StyleSheet, TouchableOpacity,Image,SafeAreaView} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {useTranslation} from "react-i18next";
import {retrieveFromSecureStore, saveInSecureStore} from "../../components/StoreData";
import { AsyncStorage } from 'react-native';
import languageData  from '../../../LanguageData';


export default function LanguageScreen({navigation}){
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const [didChoose, setDidChoose] = useState(false);
    const {t, i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] =useState('en');

    const scrollLanguage = (lang) => {
        setSelectedLanguage(lang);
        changeLanguage(lang);
        setDidChoose(false);
    }
    const changeLanguage = (value) => {
        i18n
            .changeLanguage(value)
            .then(() => setCurrentLanguage(value))
            .catch(err => console.log(err));
    };

    const chooseLanguage = () =>  {
        setDidChoose(true);
        saveInSecureStore("language", selectedLanguage).then(r => console.log(r));
        changeLanguage(selectedLanguage);
        navigation.navigate("Start");
    }
    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={style.statucBar} barStyle="light-content"/>

                <TouchableOpacity style={style.touch} onPress={() => navigation.navigate("Login")} >
                    <Image style={style.logo} source ={require('../../../assets/splash1.png')} />
                </TouchableOpacity>
            </View>

            <View style={style.footer}>

                <Text center medium bold margin="20px 0 0 0" color="#1c3f60">
                    {t("Commun.title")}
                </Text>

                <Picker selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) => scrollLanguage(itemValue)}>
                    {languageData.map((lang,key) => {
                        return (
                            <Picker.Item label={lang.name} value={lang.code} key={lang.id} />
                        )
                    })}
                </Picker>

                <TouchableOpacity style={style.buttonChoose} onPress={() => chooseLanguage()} delayPressIn={0}>
                    <Text center medium bold color="white">
                        {t("LanguageScreen.Choose")}
                    </Text>
                </TouchableOpacity>


            <TouchableOpacity style={style.statucBar} barStyle="light-content"/>
            </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: "#1c3f60",
    },
    touch :{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
     header : {
         flex : 1,
         alignItems : "center",
         justifyContent : "center",
    },
     footer :{
         height : "44%",
         backgroundColor: "#fff",
         borderTopLeftRadius  : 30,
         borderTopRightRadius : 30,
         borderBottomLeftRadius : 30,
         borderBottomRightRadius : 30,
},
    buttonChoose : {
        backgroundColor: "#1c3f60",
        padding :  16,
        marginLeft : 30,
        marginRight : 30,
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "white",
    },
    buttonDidChoose : {
        backgroundColor: "#237805",
        padding :  16,
        marginLeft : 30,
        marginRight : 30,
        alignItems : "center",
        justifyContent : "center",
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "white",
    },
    statucBar : {
        marginTop : 16,
        padding :  16,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",
    },
    logo :{
        width : 400,
        height : 400,
    }
})
