import {StyleSheet, View, useWindowDimensions, Image} from 'react-native';
import React from "react";
import Text from "../../components/Text";
import {useTranslation} from "react-i18next";


export default function onBoardingItemsScreen({item}) {
    const { width } = useWindowDimensions();
    const {t} = useTranslation();

    return (
        <View style={[styles.container,{width}]}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={[styles.image,{width,resizeMode :'contain'}]}/>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{t(item.title)}</Text>
                    <Text style={styles.description}>{t(item.description)}</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        backgroundColor : "#1c3f60",
    },
    imageContainer : {
        width : 370,
        height : 370,
        marginTop : 70,
    },
    textContainer : {
        flex : 0.3,
        marginTop :60,
    },
    image :{
        flex : 0.7,
        justifyContent : "center",
    },
    title :{
        fontWeight : '800',
        fontSize : 28,
        color: "#ffffff",
        textAlign : "center"
    },
    description :{
        fontWeight : '300',
        color: "#e5d7d7",
        textAlign : "center",
        paddingHorizontal : 64
    }
})
