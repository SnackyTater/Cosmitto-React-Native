import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { authPath } from './path'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const createRouter = (item) => {
    // const component = 'stack' in item ? (
    //     <Stack.Navigator>
    //         {
    //             item.stack.map(item => <Stack.Screen name={item.name} component={item.component} />)
    //         }
    //     </Stack.Navigator>
    // ) : item.component

    return <Tab.Screen name={item.label} component={item.component} />
}

export default function AuthRouter() {
    console.log('auth')
    return (
        <Tab.Navigator>
            {
                authPath.map((item) => createRouter(item))
            }
        </Tab.Navigator>
    )
}