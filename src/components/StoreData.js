import * as SecureStore from 'expo-secure-store';

/**
 * The purpose of this method is to save in localstore with Secure Store Expo
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
export const saveInSecureStore = async (key,value) => {
    return await SecureStore.setItemAsync(key,value);
};

/**
 * The purpose of this method is to retreive data from localstore with Secure Store Expo
 * @param key
 * @returns {Promise<string>}
 */
export const retrieveFromSecureStore = async (key) => {
    return await SecureStore.getItemAsync(key);
};



