import {StyleSheet, View, useWindowDimensions, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import Text from "../../components/Text";


export default function onBoardingItemsScreen({item}) {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.container,{width}]}>
            <Image source={item.image} style={[styles.image,{width,resizeMode :'contain'}]}/>
            <View style={{flex : 0.3}}>
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
    image :{
        flex : 0.7,
        justifyContent : "center",
        width : 200,
        height : 200,
    },
    title :{
        fontWeight : '800',
        fontSize : 28,
        marginBottom : 10,
        color: "#493d8a",
        textAlign : "center"
    },
    description :{
        fontWeight : '300',
        marginBottom : 10,
        color: "#62656b",
        textAlign : "center",
        paddingHorizontal : 64
    }
})
