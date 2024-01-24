import AsyncStorage from "@react-native-async-storage/async-storage";


export const setToken = async (accessToken: string) => {
    if (accessToken) {

        await AsyncStorage.setItem(`token`, accessToken);
    }
};

export const getAccessToken = (): Promise<string> =>
    new Promise(async resolve => {
        const token = await AsyncStorage.getItem(`token`);

        resolve(token || '');
    });


export const removeToken = async () => {
    await AsyncStorage.removeItem(`token`);
};