import styled from 'styled-components/native';
import Text from '../../components/Text';
import {AntDesign} from "@expo/vector-icons";

export default function HeaderScreen({navigation,screenName}) {
    const logout = () => {
        navigation.navigate("Pin");
    }
    return (
        <Container>
            <StatusBar barStyle="light-content"/>
            <Header>
                <ProfilePhoto source={require("../../../assets/personLogo.png")}/>
                <Welcome>
                    <Text heavy medium>Welcome Khalil</Text>
                    <Text>{screenName}</Text>
                </Welcome>
                <AntDesign name="logout" size={24} color="#565656" onPress={logout}/>
            </Header>
            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
`;

const Header = styled.View`
    flex-direction : row;
    align-items : center;
    margin : 16px 16px 32px 16px; 
`;

const ProfilePhoto = styled.Image`
    width : 60px;
    height : 60px;
    border-radius : 60px;
`;

const Welcome = styled.View`
    flex : 1;
    padding : 0 16px ;
`;

const StatusBar = styled.StatusBar``;

