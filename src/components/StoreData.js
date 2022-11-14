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

export const StoreJsonData = async (key,value) => {
    AsyncStorage.setItem(key, JSON.stringify(value), (err)=> {
        if(err){
            console.log("an error");
            throw err;
        }
        console.log("success");
    }).catch((err)=> {
        console.log("error is: " + err);
    });
};

export const RetrieveJsonData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log("value",JSON.parse(value));

        if (value !== null) {
            console.log("value",JSON.parse(value));
            return JSON.parse(value);
        }
    } catch (error) {
        // Error retrieving data
    }
};

