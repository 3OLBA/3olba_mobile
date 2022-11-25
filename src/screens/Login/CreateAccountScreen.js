import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Platform, ActivityIndicator,Alert} from 'react-native';
import Text from '../../components/Text';
import {Feather, FontAwesome, MaterialIcons,AntDesign} from '@expo/vector-icons';
import {BackModalScreen} from './Modal/BackModalScreen';
import {SupportScreen} from "../Common/SupportScreen";
import {errorSignUp, ModalStatus, USERDETAILS} from '../Common/commonValue';
import {useTranslation} from "react-i18next";
import {addOrModifyUse} from "../../actions/userSignUpAction";
import {SubmitModal} from "./Modal/SubmitModal";
import {Loading} from "./Modal/Loading";


export const CreateAccountScreen = ({navigation}) => {
    const [userSignUp, setUserSignUp] = useState({
        email : "",
        password : "",
        repeartPassword : "",
        phoneNumber :"",
    });
    const [phoneNumberError,setPhoneNumberError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [eyeOn, setEyeOn] = useState(false);
    const [isText, setIsText] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [status, setStatus] = useState(ModalStatus.INIT);
    const [success, setSuccess] = useState(null);
    const {t} = useTranslation();
    const [showModalSubmit,setShowModalSubmit] = useState(false);

    const showAndHidePassword = () => {
        if(!eyeOn) setEyeOn(true);
        else if(eyeOn) setEyeOn(false);
    }

    const handleSignUp = (fieldName,text) => {
        switch (fieldName){
            case USERDETAILS.PHONE_NUMBER :
                setUserSignUp({...userSignUp,phoneNumber: text});
                break;
            case USERDETAILS.EMAIL :
                setUserSignUp({...userSignUp,email: text});
                break;
            case USERDETAILS.PASSWORD :
                setUserSignUp({...userSignUp,password: text});
                break;
            case USERDETAILS.REPEAT_PASSWORD :
                setUserSignUp({...userSignUp,repeartPassword: text});
                break;
        }
    }

    const showModalAndLeave = () => {
        if(modalVisible){
            setModalVisible(false);
            navigation.navigate("Login");
        }
        else if(!modalVisible){
            if( userSignUp.phoneNumber?.length === 0 && userSignUp.password?.length === 0 &&
            userSignUp.repeartPassword?.length === 0 && userSignUp.email?.length === 0) {
                navigation.navigate("Login");
            } else {
                setModalVisible(true);
            }
        }
    }

    const hideModalAndStay = () => {
        setModalVisible(false);
    }

    const submit = () => {
        let isPhoneNumber = validPhoneNumber(userSignUp.phoneNumber);
        let isValidEmail = validEmail(userSignUp.email);
        setPhoneNumberError(!isPhoneNumber);
        setEmailError(!isValidEmail);
        console.log("isValidEmail =>",isValidEmail);
        console.log("isValidPhoneNumber =>",isPhoneNumber);
        if(isValidEmail && isPhoneNumber){
            setStatus(ModalStatus.START);
            addOrModifyUse(userSignUp).then(data => {
                console.log("result",data?.success);
                if(data?.success){
                    setStatus(ModalStatus.SUCCESS);
                }
                if(!data?.success){
                    setStatus(ModalStatus.FAILED);
                }
            });
        }
    }

    const hideModalSubmitAndLeave = () => {
        if(status === ModalStatus.SUCCESS){
            navigation.navigate("VerifyAccount",{email:userSignUp.email})
        }
        setStatus(ModalStatus.INIT);
    }

    const validPhoneNumber = (phoneNumber) => {
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        return regex.test(phoneNumber);
    }

    const validEmail = (email) => {
        return email?.toString().includes("@");
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image}
                       source={require("../../../assets/SignUp.png")}
                       resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                {/*############################## PHONE NUMBER #####################################*/}

                <Text style={styles.text_footer} xlarge color="black">{t("Commun.phoneNumber")}</Text>
                <View style={styles.action}>
                    <FontAwesome name="phone" color="#05375a" size={25}/>
                    <TextInput style={styles.textInput}
                               onChangeText={value => handleSignUp(USERDETAILS.PHONE_NUMBER,value)}
                               placeholder={t("Commun.phoneNumber")}
                               autoCapitalize="none"
                               keyboardType="phone-pad"
                    />
                    <Feather name="check-circle" color={!isText ? "#4e4c4c" : "#1bc707"} size={22}/>
                </View>
                { phoneNumberError && <Text color="#A81919FF">{errorSignUp.phoneNumberIncorrect}</Text>}

                {/*##################################################################################*/}
                {/*################################## EMAIL #########################################*/}

                <Text style={[styles.text_footer,{marginTop:10}]} xlarge color="black">{t('Commun.Email')}</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={25}/>
                    <TextInput style={styles.textInput}
                               onChangeText={value => handleSignUp(USERDETAILS.EMAIL,value)}
                               placeholder={t('Commun.Email')}
                               autoCapitalize="none"/>
                    <Feather name="check-circle" color={!isText ? "#4e4c4c" : "#1bc707"} size={22}/>
                </View>
                { emailError && <Text color="#A81919FF">{errorSignUp.emailIncorrect}</Text>}

                {/*##################################################################################*/}
                {/*################################### PASSWORD #####################################*/}

                <Text style={[styles.text_footer,{marginTop:10}]} xlarge color="black">{t('Commun.Password')}</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput}
                               secureTextEntry={!eyeOn}
                               onChangeText={value => handleSignUp(USERDETAILS.PASSWORD,value)}
                               placeholder={t('Commun.Password')}
                               autoCapitalize="none"/>
                    <Feather name={!eyeOn ? "eye-off" : "eye"} color="grey" size={22} onPress={() => showAndHidePassword()}/>
                </View>
                { passwordError && <Text color="#A81919FF">{errorSignUp.phoneNumberIncorrect}</Text>}

                {/*##################################################################################*/}
                {/*################################### REPEAT PASSWORD ##############################*/}

                <Text style={[styles.text_footer,{marginTop:10}]} xlarge color="black">{t('Commun.RepeatPassword')}</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput}
                               secureTextEntry={!eyeOn}
                               onChangeText={value => handleSignUp(USERDETAILS.REPEAT_PASSWORD,value)}
                               placeholder={t('Commun.RepeatPassword')}
                               autoCapitalize="none"/>
                    <Feather name={!eyeOn ? "eye-off" : "eye"} color="grey" size={22} onPress={() => showAndHidePassword()}/>
                </View>
                { passwordError && <Text color="#A81919FF">{errorSignUp.passwordNotMatch}</Text>}

                {/*##################################################################################*/}

                <View style={styles.buttons}>

                    <TouchableOpacity style={[styles.signIn,{borderWidth: 1,
                        borderColor : "#1c3f60"}]} onPress={() => showModalAndLeave()}>
                        <Text style={[styles.textSign,{color : "#1c3f60"}]}>
                            {t('Commun.Back')}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.signIn,{backgroundColor : "#1c3f60"}]} onPress={()=> submit()}>
                        <Text style={[styles.textSign,{color:"#fff"}]}>
                            {t('Commun.Submit')}
                        </Text>
                    </TouchableOpacity>

                </View>

                {/*###################################### SUPPORT VIEW ##############################################*/}

                {/*<SupportScreen navigation={navigation}/>*/}

                {/*##################################### SHOW MODAL NOTIF IN CASE CANCEL ############################*/}

                <BackModalScreen modalVisible={modalVisible} hideModalAndStay={hideModalAndStay}
                                 showModalAndLeave={showModalAndLeave}/>

                {/*#################################### SUBMIT AND FAILED MODAL #####################################*/}

                <SubmitModal status={status} hideModalSubmitAndLeave={hideModalSubmitAndLeave}/>

                {/*######################################## LOADING MODAL ###########################################*/}

                {/*<Loading status={status}/>*/}

                {/*###################################################################################################*/}

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
    text_footer : {
        color : "#05375a",
        fontSize : 17,
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
        marginTop : 30,
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
    support : {
        flexDirection :"row",
        justifyContent : "center",
        alignItems : "center",
        marginTop:20,
    },


})
