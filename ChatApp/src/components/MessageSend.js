import React from 'react';
import { View, Text } from 'react-native';
import messageSend from './styles/message-send';

export default function MessageSend({message}) {
  return (
    <View style={messageSend.container}>
      <Text>{message}</Text>
    </View>
  );
}
