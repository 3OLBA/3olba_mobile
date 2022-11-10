import React,{useState} from 'react';
import {View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Platform, KeyboardType} from 'react-native';
import Text from '../../components/Text';
import {Feather, FontAwesome, MaterialIcons,AntDesign} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {BackModalScreen} from './Modal/BackModalScreen';
import {SupportScreen} from "./CommunComposants/SupportScreen";
import {errorSignUp, USERDETAILS} from '../Common/commonValue';


export const CreateAccountScreen = ({navigation}) => {
    const [userSignUp, setUserSignUp] = useState({
        email : "",
        password : "",
        repeartPassword : "",
        phoneNumber :"",
    });
    const [phoneNumberError,setPhoneNUmberError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [eyeOn, setEyeOn] = useState(false);
    const [isText, setIsText] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

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
        console.log("user",userSignUp);
        if(!validePhoneNumber(userSignUp.phoneNumber)){
            setPhoneNUmberError(true);
        }
        if(validePhoneNumber(userSignUp.phoneNumber)){
            setPhoneNUmberError(false);
        }
        if(!valideEmail(userSignUp.email)){
            setEmailError(true);
        }
        if(valideEmail(userSignUp.email)){
            setEmailError(false);
        }
    }

    const validePhoneNumber = (phoneNumber) => {
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        console.log(regex.test(phoneNumber));
        return regex.test(phoneNumber);
    }
    const valideEmail = (email) => {
        console.log(email.includes("@"))
        return email.includes("@");
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
                <Text style={styles.text_footer} xlarge color="black">Phone number</Text>
                <View style={styles.action}>
                    <FontAwesome name="phone" color="#05375a" size={25}/>
                    <TextInput style={styles.textInput}
                               onChangeText={value => handleSignUp(USERDETAILS.PHONE_NUMBER,value)}
                               placeholder="Your email or username"
                               autoCapitalize="none"
                               keyboardType="phone-pad"
                    />
                    <Feather name="check-circle" color={!isText ? "#4e4c4c" : "#1bc707"} size={22}/>
                </View>
                { phoneNumberError && <Text color="#A81919FF">{errorSignUp.phoneNumberIncorrect}</Text>}

                <Text style={[styles.text_footer,{marginTop:10}]} xlarge color="black">Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={25}/>
                    <TextInput style={styles.textInput}
                               onChangeText={value => handleSignUp(USERDETAILS.EMAIL,value)}
                               placeholder="Your email or username"
                               autoCapitalize="none"/>
                    <Feather name="check-circle" color={!isText ? "#4e4c4c" : "#1bc707"} size={22}/>
                </View>
                { emailError && <Text color="#A81919FF">{errorSignUp.emailIncorrect}</Text>}

                <Text style={[styles.text_footer,{marginTop:10}]} xlarge color="black">Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput}
                               secureTextEntry={!eyeOn}
                               onChangeText={value => handleSignUp(USERDETAILS.PASSWORD,value)}
                               placeholder="Your password"
                               autoCapitalize="none"/>
                    <Feather name={!eyeOn ? "eye-off" : "eye"} color="grey" size={22} onPress={() => showAndHidePassword()}/>
                </View>
                { passwordError && <Text color="#A81919FF">{errorSignUp.phoneNumberIncorrect}</Text>}

                <Text style={[styles.text_footer,{marginTop:10}]} xlarge color="black">Repeat password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput}
                               secureTextEntry={!eyeOn}
                               onChangeText={value => handleSignUp(USERDETAILS.REPEAT_PASSWORD,value)}
                               placeholder="Repeat your password"
                               autoCapitalize="none"/>
                    <Feather name={!eyeOn ? "eye-off" : "eye"} color="grey" size={22} onPress={() => showAndHidePassword()}/>
                </View>
                { passwordError && <Text color="#A81919FF">{errorSignUp.passwordNotMatch}</Text>}

                <View style={styles.buttons}>
                    <TouchableOpacity style={[styles.signIn,{borderWidth: 1,
                        borderColor : "#1c3f60"}]} onPress={() => showModalAndLeave()}>
                        <Text style={[styles.textSign,{color : "#1c3f60"}]}>
                            Back
                        </Text>
                    </TouchableOpacity>

                    <LinearGradient colors={["#1c3f60","#5085b4"]}
                        style={styles.signIn}>
                        <Text style={[styles.textSign,{color:"#fff"}]} onPress={()=> submit()}>
                            Submit
                        </Text>
                    </LinearGradient>

                </View>

                <SupportScreen navigation={navigation}/>

                <BackModalScreen navigation={navigation}
                                 modalVisible={modalVisible}
                                 hideModalAndStay={hideModalAndStay}
                                 showModalAndLeave={showModalAndLeave}/>
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
