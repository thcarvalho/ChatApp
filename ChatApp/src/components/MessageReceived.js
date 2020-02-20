import React from 'react';
import { View, Text } from 'react-native';
import messageReceived from './styles/message-received';

export default function MessageReceived({message}) {
  return (
    <View style={messageReceived.container}>
      <Text>{message}</Text>
    </View>
  );
}
