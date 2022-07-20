import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux'

import { metric } from '../../utils/metrics'
import { AUTH } from '../../redux/action'

export default function Login() {
    const dispatch = useDispatch()

    const handleClick = () => dispatch({
        type: AUTH,
        payload: {
            auth: true,
        }
    })

    return (
        <View style={style.login__container}>
            <View style={style.login__form}>
                <Text>Login form</Text>
                <Button title='login' onPress={handleClick} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    login__container: {
        flex: 1,
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    login__form: {
        height: new metric(70).VH(),
        width: new metric(70).VW(),
        backgroundColor: 'black'
    }
})