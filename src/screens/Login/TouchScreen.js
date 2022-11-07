import styled from 'styled-components';
import {Fontisto,AntDesign} from '@expo/vector-icons';
import Text from '../../components/Text';


export default function TouchScreen({navigation}){

    return (
        <Container>

            <StatusBar barStyle="light-content"/>

            <Touch onLongPress={() => navigation.navigate("Login")} delayPressIn={0}>
                <Logo source ={require('../../../assets/logo2.png')} />
            </Touch>

            <Text center medium bold margin="20px 0 0 0" color="white">
                The new solution to transfer your money.
            </Text>
            <BottomButtonChoice>
                <PinAccess onPress={() => navigation.navigate("Login")} delayPressIn={0}>
                    <Text center medium bold color="white">
                        Already client
                    </Text>
                </PinAccess>

                <AlreadyClient onPress={() => navigation.navigate("OnBoarding")} delayPressIn={0}>
                    <AntDesign name="login" size={16} color="white" />
                    <Text center medium bold margin='0 0 0 10px' color="white">
                        Get started
                    </Text>
                </AlreadyClient>
            </BottomButtonChoice>

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
     margin-left : 40px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
     border-radius : 10px;
     border-width : 1px;
     border-color : white;
`;
const AlreadyClient  = styled.TouchableOpacity`
     margin-top : 16px ;
     margin-right : 40px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
     border-radius : 10px;
     border-width : 1px;
     border-color : white;
`;

const BottomButtonChoice  = styled.TouchableOpacity`
     flex-direction : row;
     justify-content : space-between;
     margin-top : 20px;
`;

const StatusBar  = styled.TouchableOpacity`
     margin-top : 16px ;
     padding :  16px;
     flex-direction : row;
     align-items : center;
     justify-content : center;
`;

const Logo = styled.Image`
    width : 400px;
    height : 400px;
`;
