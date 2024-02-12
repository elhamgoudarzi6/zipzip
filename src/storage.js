import { AsyncStorage } from "react-native";
export const storeData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
        // console.log(data)
    } catch (error) {
        throw new Error(error);
    }
};
export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        throw new Error(error);
    }
};
export const retrieveData = async (key) => {
    // try {
        let value= await AsyncStorage.getItem(key);
       console.log(value)
        return value;
    // } catch (error) {
    //     return null;
    // }
};
