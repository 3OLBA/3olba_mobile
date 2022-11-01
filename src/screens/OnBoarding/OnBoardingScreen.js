import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from "react";
import Text from "../../components/Text";
import onBoardingData from '../../../OnBoardingData';
import OnBoardingItems from './OnBoardingItemsScreen';
import styled from "styled-components";

export default function OnBoardingScreen() {

    return (
        <Container>
            <FlatList data={onBoardingData} renderItem={({item}) => <OnBoardingItems item={item}/> }
                      horizontal showsHorizontalScrollIndicator
            />
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color: #ffffff;
`;
