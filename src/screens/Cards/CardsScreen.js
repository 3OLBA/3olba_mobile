import styled from 'styled-components/native';
import myCards from '../../../CardsData';
import HeaderScreen from "../Common/HeaderScreen";
import RenderCardScreen from "./RenderCardScreen";
import {useTranslation} from "react-i18next";
import Text from "../../components/Text";
import {TouchableOpacity,View,StyleSheet} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import React, {useContext, useState} from 'react';
import {BackModalScreen} from "../Modal/BackModalScreen";
import {AddCarte} from "../Modal/AddCarte";
import {MyContext} from "../../../Global/Context";

export default function CardsScreen({navigation}) {
    const {t} = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);
    const {transactions , setTransactions} = useContext(MyContext);

    const showModalAndLeave = () => {
        if(modalVisible){
            setModalVisible(false);
            navigation.navigate("Transactions");
        }
        else if(!modalVisible){
            setModalVisible(true);
        }
    }
    const hideModalAndStay = () => {
        setModalVisible(false);
    }
    const renderCards = ({ item }) => {
        return (
            <RenderCardScreen item={item}/>
        )
    }

    return (
        <Container>
            <HeaderScreen screenName={t("Cards.MyCards")} navigation={navigation}/>
            {/*<View style={styles.HeaderList}>*/}
            {/*    <Text center xlarge heavy>{t("Cards.ListOfCards")}</Text>*/}
            {/*    <TouchableOpacity style={styles.ButtonAdd} onPress={() => setModalVisible(true)}>*/}
            {/*        <Ionicons name="ios-add-circle" size={24} color="white" />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
            <Cards data={transactions} renderItem={renderCards}/>

            <AddCarte navigation={navigation}
                             modalVisible={modalVisible}
                             hideModalAndStay={hideModalAndStay}
                             showModalAndLeave={showModalAndLeave}/>

            <StatusBar barStyle="light-content"/>
        </Container>
    );
}

const styles = StyleSheet.create({
    HeaderList :  {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        marginLeft : 20,
        marginRight :20,
        marginBottom : 15,
    },
    ButtonAdd:{
        backgroundColor : "#237d19",
        borderRadius : 6,
        padding : 10,
    }
})

const Container = styled.SafeAreaView`
    flex : 1;
    background-color : #1e1e1e
`;

const Cards = styled.FlatList`
    padding : 0 8px;
`;

const StatusBar = styled.StatusBar``;
