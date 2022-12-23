import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Platform, I18nManager,Picker} from 'react-native';
import Text from '../../components/Text';
import {Feather, FontAwesome} from '@expo/vector-icons';
import { SocialIcon } from 'react-native-elements';
import {useTranslation} from 'react-i18next';
require("../../../assets/i18n/Settings/i18n");
import {ModalStatus, USERDETAILS} from "../Common/commonValue";
import {getToken, login} from "../../actions/LoginAction";
import {SubmitModal} from "./Modal/SubmitModal";
import {saveInSecureStore} from "../../components/StoreData";

export const LoginScreen = ({navigation}) => {
    const {t} = useTranslation();
    // const [login, setLogin] = useState("You email or username");
    const [password, setPassword] = useState(null);
    const [emailError,setEmailError] = useState(false);
    const [eyeOn, setEyeOn] = useState(false);
    const [isText, setIsText] = useState(false);
    const [status, setStatus] = useState(ModalStatus.INIT);
    const [loginUser,setLoginUser] = useState({
        email : "",
        password : "",
    })

    const handleSignIn = (fieldName,text) => {
        console.log(text);
        switch (fieldName){
            case USERDETAILS.EMAIL :
                setLoginUser({...loginUser,email: text});
                break;
            case USERDETAILS.PASSWORD :
                setLoginUser({...loginUser,password: text});
                break;
        }
    }

    const showAndHidePassword = () => {
        if(!eyeOn) setEyeOn(true);
        else if(eyeOn) setEyeOn(false);
    }

    const hideModalSubmitAndLeave = () => {
        if(status === ModalStatus.SUCCESS){
            navigation.navigate("Bottom",{email:loginUser.email})
        }
        setStatus(ModalStatus.INIT);
    }

    const validEmail = (email) => {
        return email?.toString().includes("@");
    }

    const submitLogin = () => {
        console.log("User",loginUser);
        let isValidEmail = validEmail(loginUser.email);
        setEmailError(!isValidEmail);
        setIsText(isValidEmail)
        console.log("isValidEmail =>",isValidEmail);
        if(isValidEmail){
            setStatus(ModalStatus.START);
            console.log("User",loginUser);
            login(loginUser).then(token => {
                console.log("token",token);
                if(token){
                    console.log(token)
                    setStatus(ModalStatus.INIT);
                    navigation.navigate("Bottom",{email:loginUser.email})
                }else{
                    setStatus(ModalStatus.FAILED);
                }
            });
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image}
                       source={require("../../../assets/paper-plane.png")}
                       resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>

                {/*############################### EMAIL ################################################*/}

                <Text style={styles.text_footer} xlarge color="black">{t('Commun.Email')}</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={25}/>
                    <TextInput style={styles.textInput}
                               onChangeText={input => handleSignIn(USERDETAILS.EMAIL,input)}
                               placeholder={t('Commun.Email')}
                               autoCapitalize="none"/>
                    <Feather name="check-circle" color={!isText ? "#4e4c4c" : "#1bc707"} size={22}/>
                </View>

                {/*######################################################################################*/}
                {/*################################# PASSWORD ###########################################*/}

                <Text style={[styles.text_footer,{marginTop:30}]} xlarge color="black">{t('Commun.Password')}</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput}
                               onChangeText={input => handleSignIn(USERDETAILS.PASSWORD,input)}
                               secureTextEntry={!eyeOn}
                               placeholder={t('Commun.Password')}
                               autoCapitalize="none"/>
                    <Feather name={!eyeOn ? "eye-off" : "eye"} color="grey" size={22} onPress={() => showAndHidePassword()}/>
                </View>

                {/*######################################################################################################*/}

                <View style={styles.createAccount}>
                    <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                        <Text center medium black  color="#1c3f60">
                            {t('LoginScreen.CreateNewAccount')}
                        </Text>
                    </TouchableOpacity>
                </View>
                {/*######################################## Button Back-SignIn ###########################################*/}

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.signIn,{borderWidth: 1,
                        borderColor : "#1c3f60"}]} onPress={() => navigation.navigate("Start")}>
                        <Text style={[styles.textSign,{color : "#1c3f60"}]}>
                            {t("Commun.Back")}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity colors={["#1c3f60","#5085b4"]}
                        style={[styles.signIn,{backgroundColor:"#1c3f60"}]} onPress={() => submitLogin()}>
                        <Text style={[styles.textSign,{color:"#fff"}]}>
                            {t('LoginScreen.SignIn')}
                        </Text>
                    </TouchableOpacity>
                </View>
                {/*########################################################################################################*/}

                <Text center medium black margin="20px 0 0 0" color="#1c3f60">
                    {t('LoginScreen.ConnectWith')}
                </Text>
                <View style={styles.buttonsGA}>
                    <TouchableOpacity style={styles.signInGA} >
                        <SocialIcon light raised={true} type='google'/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInGA}>
                        <SocialIcon light raised={true} type='apple'/>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                    <Text center medium black margin="40px 0 0 0" color="#1c3f60">
                        {t('LoginScreen.ForgetPassword')}
                    </Text>
                </TouchableOpacity>

                {/*#################################### SUBMIT AND FAILED MODAL #####################################*/}

                <SubmitModal status={status} hideModalSubmitAndLeave={hideModalSubmitAndLeave}/>

                {/*######################################## LOADING MODAL ###########################################*/}

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
    createAccount : {
        flexDirection : "row",
        marginTop : 10,
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
    },
    textSign : {
        fontSize : 18,
        fontWeight : 'bold',
    },
    logo : {
        paddingLeft : 10,
    },


})
