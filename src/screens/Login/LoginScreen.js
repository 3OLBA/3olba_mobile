import React from 'react';
import {View, StyleSheet, Image, SafeAreaView, TextInput} from 'react-native';
import Text from '../../components/Text';
import { MaterialIcons } from '@expo/vector-icons';


export const LoginScreen = () => {
    const [login, setLogin] = React.useState("You email or username");
    const [password, setPassword] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require("../../../assets/login.png")}/>
            </View>
            <View style={styles.containerText}>
                <Text center large bold>Login : </Text>
                <View style={styles.containerLogin}>
                    <TextInput
                        style={styles.input}
                        placeholder={"You email"}
                    />
                    <TextInput
                        style={styles.input}
                    />
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
    input: {
        width : 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor : "white",
        padding: 10,
    },
    containerText : {
        flex : 1,
        alignItems : "left",
        justifyContent : "center",
        marginLeft : 10,
        paddingBottom : 100,
    },
    containerLogin : {
        marginTop : 10,
        paddingTop : 30,
        borderRadius : 10,
        borderWidth : 1,
        borderColor : "white",
        flex : "row",
        justifyContent: "center",
        alignItems : "center",
        width : 350,
    },
    containerImage : {
        alignItems : "center",
        justifyContent : "center"
    },
    image :{
        width : 200,
        height : 200,
    }
})
