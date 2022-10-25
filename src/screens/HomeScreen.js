import styled from 'styled-components';
import Text from '../components/Text';
import {FontAwesome5} from "@expo/vector-icons";


export default function HomeScreen() {
    return (
        <Container>
            <Header>
                <ProfilePhoto source={require("../../assets/logo.png")}/>
                <Welcome>
                    <Text>Welcome,</Text>
                    <Text>Design</Text>
                </Welcome>
                <FontAwesome5 name="cog" size={24} color="#565656"/>
            </Header>
            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex : 1;
    background-color: #1e1e1e;
`;

const Header = styled.View`
    flex-direction : row,
    align-items : center;
    margin : 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
    width:60px;
    height : 60px;
    border-radius: 20px;
`;

const Welcome = styled.View``;

const StatusBar = styled.StatusBar``;
