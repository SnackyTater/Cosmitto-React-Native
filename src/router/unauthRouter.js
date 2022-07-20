import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { unauthPath } from './path'
import Login from '../screen/login'

const Stack = createNativeStackNavigator()

export default function UnauthRouter() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='login' component={Login} />
        </Stack.Navigator>
    )
}