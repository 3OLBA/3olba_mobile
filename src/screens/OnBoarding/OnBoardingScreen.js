import {FlatList, SafeAreaView, StyleSheet, View , Animated} from 'react-native';
import React, {useCallback, useEffect, useState , useRef} from "react";
import Text from "../../components/Text";
import onBoardingData from '../../../OnBoardingData';
import OnBoardingItems from './OnBoardingItemsScreen';
import styled from "styled-components";
import Paginator from "./Paginator";

export default function OnBoardingScreen() {
    const [currentIndex , setCurrentIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold : 50}).current;

    const slideRef = useRef(null);

    return (
        <Container>
            <SubContainer >
                <FlatList data={onBoardingData}
                          renderItem={({item}) => <OnBoardingItems item={item}/> }
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          pagingEnabled
                          bounces={false}
                          keyExtractor={(item) => item.id}
                          onScroll={Animated.event([{ nativeEvent : { contentOffset : { x : scrollX }}}],{useNativeDriver : false})}
                          scrollEventThrottle={32}
                          onViewableItemsChanged={viewableItemsChanged}
                          viewabilityConfig={viewConfig}
                          ref={slideRef}
                />
            </SubContainer>
            <Paginator data={onBoardingData} scrollX={scrollX} />
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 3;
    background-color: #ffffff;
`;
const SubContainer = styled.View`
    flex : 3
`;