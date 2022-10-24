import { StyleSheet, Text, View } from 'react-native';

export default function CardsScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello Cards</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
