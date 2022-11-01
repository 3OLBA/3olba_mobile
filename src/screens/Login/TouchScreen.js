import styled from 'styled-components';
import {Fontisto,AntDesign} from '@expo/vector-icons';
import Text from '../../components/Text';


export default function TouchScreen({navigation}){

    return (
        <Container>

            <StatusBar barStyle="light-content"/>

            <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
                <Circle bgColor='#1c3f60'>
                    <Circle bgColor='#5196F405'>
                        <Circle bgColor='#5196f410'>
                            <Circle bgColor='#5196F430'>
                                <TouchButton>
                                    {/*<MaterialIcons name="fingerprint" size={64} color="#fffff"/>*/}
                                    <Logo source ={require('../../../assets/logo.png')} />
                                </TouchButton>
                            </Circle>
                        </Circle>
                    </Circle>
                </Circle>
            </Touch>

            <Text center medium bold margin="16px 0 0 0" color="white">
                The new solution to transfer your money.
            </Text>

            <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
                <AntDesign name="login" size={16} color="white" />
                <Text margin='0 0 0 10px' color="white">
                    Get started
                </Text>
            </PinAccess>

            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

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
     margin-top : 16px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
`;

const StatusBar  = styled.TouchableOpacity`
     margin-top : 16px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
`;

const Logo = styled.Image`
    width : 120px;
    height : 120px;
    border-radius : 120px;
`;
