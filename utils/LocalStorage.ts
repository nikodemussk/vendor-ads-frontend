import AsyncStorage from "@react-native-async-storage/async-storage"

export class LocalStorage {
    
    static async getUserProfileFullName(setFullName: any) {
       AsyncStorage.getItem('fullName')
        .then(setFullName);
    }
}