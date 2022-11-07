import React from 'react';
import {View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Platform} from 'react-native';
import Text from '../../components/Text';
import {Feather, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import {LinearGradient} from "react-native-svg";


export const LoginScreen = () => {
    const [login, setLogin] = React.useState("You email or username");
    const [password, setPassword] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image}
                       source={require("../../../assets/logo.png")}
                       resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style={[styles.text_footer,{marginBottom:30}]} center title black color="black">Stay Connected</Text>
                <Text style={styles.text_footer} xlarge color="black">Email</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput} placeholder="Your email or username" autoCapitalize="none"/>
                    <Feather name="check-circle" color="green" size={20}/>
                </View>
                <Text style={[styles.text_footer,{marginTop:30}]} xlarge color="black">Password</Text>
                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20}/>
                    <TextInput style={styles.textInput} placeholder="Your password" autoCapitalize="none"/>
                    <Feather name="eye-off" color="grey" size={20}/>
                </View>
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
        flex : 3,
        backgroundColor : "white",
        borderTopLeftRadius  : 30,
        borderTopRightRadius : 30,
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
    button:{
        alignItems : "center",
        marginTop : 50,

    }


})
