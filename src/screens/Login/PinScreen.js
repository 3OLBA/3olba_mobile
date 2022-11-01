import styled from 'styled-components';
import Text from '../../components/Text';
import NumberPad from '../../components/NumberPad';
import {Fontisto} from "@expo/vector-icons";
import React, {useState,useEffect} from "react";

export default function PinScreen ({navigation}) {
    const [pinCount,setPinCount] = useState(0);
    const totalPins = 6;

    useEffect(() => {
        if(pinCount === totalPins){
            navigation.navigate("Bottom");
            setPinCount(0);
        }
    },[pinCount])

    const renderPress = () => {
        console.log(pinCount);

         const pins =  [];
         for (let x = 1 ; x <= totalPins ; x++){
             pins.push(
                 x <= pinCount ? (
                     <PinContainer key={x}>
                         <Pin/>
                     </PinContainer>)
                     :
                     (
                     <PinContainer key={x}/>
                     )
             )
        }
         return pins;
    }

    const pressKey = (item,index) => {
        setPinCount(prev => {
            return index !== 10 ? prev + 1 : prev - 1;
        });
    }

    return (
        <Container>
            <Text center heavy title color='#964ff0' margin="32px 0 0 0">
                Eolba Transfer
            </Text>
            <Text center large  margin="20px 0 0 0">
                Please enter your PIN code
            </Text>

            <PinAccess>{renderPress()}</PinAccess>

            <Text center bold margin="8px 0 0 0" color="#9c9c9f">
                Forget your PIN ?
            </Text>

            <NumberPad onPress={pressKey}/>

            <UseTouch onPress ={() => navigation.navigate("Login")} delayPressIn={0}>
                <Fontisto name="locked" size={16} color="white"/>
                <Text bold margin="0 0 0 8px" color="white">Use Touch ID</Text>
            </UseTouch>

        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color: #1c3f60;
`;

const PinAccess  = styled.View`
    flex-direction : row;
    justify-content : space-between;
     margin : 32px 64px 16px 64px;
`;

const PinContainer  = styled.View`
    width : 16px;
    height : 16px;
    border-radius : 8px;
    border-width : 1px;
    border-color : #5196f4;
    align-items : center;
    justify-content : center;
`;
const Pin  = styled.View`
    width : 8px;
    height : 8px;
    border-radius : 4px;
    border-color : #5196f4;
    background-color : #5196f4;
`;

const UseTouch = styled.TouchableOpacity`
    margin : 36px 0 64px 0;
    flex-direction : row;
    justify-content : center;
    align-items : center;
`;

const StatusBar  = styled.TouchableOpacity`
     margin-top : 16px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
`;
