import React,{useState} from 'react';
import {View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Platform} from 'react-native';
import Text from '../../components/Text';
import {Feather, FontAwesome, MaterialIcons,AntDesign} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import { SocialIcon } from 'react-native-elements'
import {SupportScreen} from "../Common/SupportScreen";
import {useTranslation} from "react-i18next";

export const ForgetPasswordScreen = ({navigation}) => {
    const [login, setLogin] = useState("You email or username");
    const [eyeOn, setEyeOn] = useState(false);
    const [isText, setIsText] = useState(false);
    const {t} = useTranslation();


    const showAndHideCheckText = (text) => {
        if(text.length >= 8) setIsText(true);
        else if(text.length < 8) setIsText(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image}
                       source={require("../../../assets/forgetPassword.png")}
                       resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                {/*<Text style={[styles.text_footer,{marginBottom:30}]} center title black color="black">Welcome in 3OLBA</Text>*/}
                <Text style={styles.text_footer} xlarge color="black">{t("Commun.Email")}
                </Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={25}/>
                    <TextInput style={styles.textInput}
                               onChangeText={input => showAndHideCheckText(input)}
                               placeholder="Your email or username"
                               autoCapitalize="none"/>
                    <Feather name="check-circle" color={!isText ? "#4e4c4c" : "#1bc707"} size={22}/>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.signIn,{borderWidth: 1,
                        borderColor : "#1c3f60"}]} onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.textSign,{color : "#1c3f60"}]}>
                            {t("Commun.Back")}
                        </Text>
                    </TouchableOpacity>

                    <LinearGradient colors={["#1c3f60","#5085b4"]}
                        style={styles.signIn}>
                        <Text style={[styles.textSign,{color:"#fff"}]}>
                            {t("Commun.Submit")}
                        </Text>
                    </LinearGradient>

                </View>

                <SupportScreen navigation={navigation}/>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#1c3f60',
    },
    header : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        paddingHorizontal : 20,
        paddingVertical : 50,
    },
    footer: {
        flex : 4,
        backgroundColor : "white",
        borderTopLeftRadius  : 30,
        borderTopRightRadius : 30,
        borderBottomRightRadius : 30,
        borderBottomLeftRadius : 30,
        paddingVertical : 50,
        paddingHorizontal : 30,
    },
    text_header : {
        color : "#fff",
        fontSize : 30,
    },
    text_footer : {
        color : "#05375a",
        fontSize : 18,
    },
    image:{
        height : 170,
        width : 170
    },
    action : {
        flexDirection : "row",
        marginTop : 20,
        borderBottomWidth : 1,
        borderBottomColor : "#f2f2f2",
        paddingBottom : 5,
    },
    textInput : {
        flex : 1,
        marginTop : Platform.OS === 'ios' ? 0 : -12,
        paddingLeft : 10,
        color : "#05375a",
    },
    buttons:{
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        marginTop : 50,
    },
    buttonsGA:{
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        marginTop : 10,

    },
    signIn:{
        width : '40%',
        height : 50,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 10,
    },
    signInGA:{
        flexDirection : "row",
        width : '40%',
        height : 50,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "#1c3f60",
    },
    textSign : {
        fontSize : 18,
        fontWeight : 'bold',
    },
    logo : {
        paddingLeft : 10,
    },


})
