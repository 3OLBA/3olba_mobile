import {StyleSheet, View, Animated, Text, TouchableOpacity,} from 'react-native';
import React, {useCallback, useEffect, useState,useRef} from "react";
import Svg,{G,Circle} from "react-native-svg";
import {AntDesign} from "@expo/vector-icons";

export default function NextButton({percentage,scrollTo}) {
    const size = 128;
    const strokeWidth = 2;
    const center = size / 2;
    const redius = center - (strokeWidth / 2);
    const circumference = 2 * Math.PI * redius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);

    const animation = (toValue) => {
        return Animated.timing(progressAnimation,{
            toValue,
            duration:250,
            useNativeDriver : true
        }).start()
    };

    useEffect(() => {
        animation(percentage);
    },[percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - circumference * value.value / 100;
            if(progressRef?.current){
                progressRef.current.setNativeProps({
                    strokeDashoffset,
                })
            }
        },[percentage]);
    })

    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center} >
                    <Circle
                        stroke="#E6E7E8"
                        cx={center}
                        cy={center}
                        r={redius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        ref={progressRef}
                        stroke="#493d8a"
                        cx={center}
                        cy={center}
                        r={redius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button}>
                <AntDesign name="arrowright" size={32} color="white" />
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    button : {
        position : "absolute",
        backgroundColor: "#493d8a",
        borderRadius : 100,
        padding : 20
    }
})
