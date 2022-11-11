import {AsyncStorage} from "@react-native-async-storage/async-storage";

export const StoreData = async (key,value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
    }
};

export const RetrieveData = async (key) => {
    let language = 'en';
    AsyncStorage.getItem(key)
        .then(r => language = r)
        .catch(err => console.log("err",err))
    return language;
};

