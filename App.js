/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Button,
  NativeModules,
} from 'react-native';

export default function () {
  const [text, setText] = useState('')
  const { CalendarModule } = NativeModules

  const handlePress = () => CalendarModule.createCalendarEvent('abc', 'xyz', (data) => setText(data))

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>testing 123</Text>
        <Button title='press me' onPress={handlePress} />
        <Text>expected: {text}</Text>
      </View>
    </SafeAreaView>
  );
};