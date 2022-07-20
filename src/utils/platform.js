import { Platform } from 'react-native'

export const getDeviceInfo = () => {
    return {
        OS: Platform.OS, // IOS hoặc Android
        version: Platform.OS === 'android' ? Platform.Version : Platform.osVersion,
        brand: Platform.Brand,
    }
}