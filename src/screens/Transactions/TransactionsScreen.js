import styled from 'styled-components/native';
import myCards from '../../../CardsData';
import HeaderScreen from "../Common/HeaderScreen";
import RenderCardScreen from "./RenderCardScreen";
import {useTranslation} from "react-i18next";
import Text from "../../components/Text";
import {TouchableOpacity,View,StyleSheet} from 'react-native';
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import React, {useContext, useState} from 'react';
import {AddCarte} from "../Modal/AddCarte";
import {MyContext} from "../../../Global/Context";

export default function TransactionsScreen({navigation}) {
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
            <View style={styles.title}>
                <Text center xlarge heavy>{t("Home.LastTransactions")} </Text>

            </View>
            <View style={styles.search}>
                <TouchableOpacity style={styles.ButtonAdd} onPress={() => setModalVisible(true)}>
                    <FontAwesome5 name="search" size={24} color="white" />
                </TouchableOpacity>
            </View>

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
    title:{
        flexDirection:"row",
        paddingRight: 15,
        marginBottom : 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    search:{
        flexDirection:"row",
        paddingRight: 15,
        marginBottom : 10,
        alignItems: 'center',
        justifyContent: 'flex-end'
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
const Title = styled.View`
    flex-direction : row;
    padding : 0 15px;
`;
const StatusBar = styled.StatusBar``;
