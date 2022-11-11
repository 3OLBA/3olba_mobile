import React from 'react';
import styled from 'styled-components/native';
import {Fontisto,AntDesign} from '@expo/vector-icons';
import Text from '../../components/Text';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {useTranslation} from "react-i18next";
import {BackScreen} from "../Common/BackScreen";


export default function TouchScreen({navigation}){
    const {t} = useTranslation();


    return (
        <Container>
            <View style={style.header}>
                <StatusBar barStyle="light-content"/>

                <Touch onPress={() => navigation.navigate("Login")} >
                    <Logo source ={require('../../../assets/splash1.png')} />
                </Touch>
            </View>

            <View style={style.footer}>
                <Text center medium bold margin="20px 0 0 0" color="#1c3f60">
                    {t("Commun.title")}
                </Text>
            <TouchableOpacity style={style.buttons}>
                <PinAccess onPress={() => navigation.navigate("Login")} delayPressIn={0}>
                    <Text center medium bold color="white">
                        {t("StartScreen.AlreadyClient")}
                    </Text>
                </PinAccess>

                <AlreadyClient onPress={() => navigation.navigate("OnBoarding")} delayPressIn={0}>
                    <AntDesign name="login" size={16} color="white" />
                    <Text center medium bold margin='0 0 0 10px' color="white">
                        {t("StartScreen.GetStarted")}
                    </Text>
                </AlreadyClient>
            </TouchableOpacity>

                <BackScreen location="Language" navigation={navigation}/>

            <StatusBar barStyle="light-content"/>
            </View>

        </Container>
    );
}

const style = StyleSheet.create({
     header : {
         flex : 1,
         alignItems : "center",
         justifyContent : "center",
    },
     footer :{
         backgroundColor: "#fff",
         borderTopLeftRadius  : 30,
         borderTopRightRadius : 30,
         borderBottomLeftRadius : 30,
         borderBottomRightRadius : 30,
},
    buttons :{
        flexDirection : "row",
        justifyContent : "space-around",
        marginTop : 20,
    }
})

const Container = styled.SafeAreaView`
    flex : 1;
    background-color: #1c3f60;
`;

const Touch = styled.TouchableOpacity`
    flex : 1;
    align-items : center;
    justify-content : center;
`;
const Circle = styled.View`
    background-color : ${(props) => props.bgColor}
    padding : 32px;
    border-radius : 999px;
`;
const TouchButton = styled.View`
     padding :  8px;
     border-radius : 100px;
`;
const PinAccess  = styled.TouchableOpacity`
    background-color: #1c3f60;
     margin-top : 16px ;
     margin-left : 40px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
     border-radius : 10px;
     border-width : 1px;
     border-color : white;
`;
const AlreadyClient  = styled.TouchableOpacity`
    background-color: #1c3f60;
     margin-top : 16px ;
     margin-right : 40px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
     border-radius : 10px;
     border-width : 1px;
     border-color : white;
`;

const BottomButtonChoice  = styled.TouchableOpacity`
     flex-direction : row;
     justify-content : space-round;
     margin-top : 20px;
`;

const StatusBar  = styled.TouchableOpacity`
     margin-top : 16px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
`;

const Logo = styled.Image`
    width : 400px;
    height : 400px;
`;
