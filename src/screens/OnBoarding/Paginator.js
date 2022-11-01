import {StyleSheet, View, useWindowDimensions,Animated} from 'react-native';
import React, {useCallback, useEffect, useState} from "react";
export default function Paginator({data,scrollX}) {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            {data.map((_,i) => {
                console.log(i)
                const inputRange = [(i - 1) * width, i * width ,(i + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate : 'clamp',
                })
                return <Animated.View style={[styles.dot,{width : dotWidth}]} key={i.toString()} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flexDirection : "row",
        height : 64,
        alignItems : "center",
        justifyContent : "center"
    },
    dot :{
        height : 10,
        width : 10,
        borderRadius : 5,
        backgroundColor : "#493d8a",
        marginHorizontal : 8,
    },
})
