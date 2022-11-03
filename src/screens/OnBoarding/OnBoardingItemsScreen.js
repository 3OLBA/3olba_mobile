import {StyleSheet, View, useWindowDimensions, Image} from 'react-native';
import React from "react";
import Text from "../../components/Text";


export default function onBoardingItemsScreen({item}) {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container,{width}]}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={[styles.image,{width,resizeMode :'contain'}]}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : "#ffffff",
    },
    imageContainer : {
        width : 300,
        height : 300,
        marginTop : 40,
    },
    textContainer : {
        flex : 0.3,
         marginTop : 30
    },
    image :{
        flex : 0.7,
        justifyContent : "center",
    },
    title :{
        fontWeight : '800',
        fontSize : 28,
        color: "#493d8a",
        textAlign : "center"
    },
    description :{
        fontWeight : '300',
        color: "#62656b",
        textAlign : "center",
        paddingHorizontal : 64
    }
})
