import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux'

import AuthRouter from './authRouter'
import UnauthRouter from './unauthRouter'

const Stack = createNativeStackNavigator()

function Router(props) {
    const { auth } = props

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    (auth) ? (
                        <Stack.Screen name='auth' component={AuthRouter} />
                    ) : (
                        <Stack.Screen name='unauth' component={UnauthRouter} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = state => state.auth
const connectedRouter = connect(mapStateToProps)(Router)
export default connectedRouter