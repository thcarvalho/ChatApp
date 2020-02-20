/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import global from './styles/global';
import TextInputMsg from '../components/TextInputMsg';
import MessageSend from '../components/MessageSend';
import MessageReceived from '../components/MessageReceived';

export default function Chat({ navigation }) {
  const [contactName, setContactName] = useState('');
  useEffect(() => {
    const contactName = navigation.getParam("contactName");
    setContactName(contactName);
  }, [contactName]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50, marginBottom: 60 }}>
        <MessageSend message="Olá" />
        <MessageReceived message="Olá" />
        <MessageSend message="Tudo bem?" />
        <MessageReceived message="Tudo bem e vc?" />
        <MessageSend message="Tudo!" />
      </ScrollView>
      <TextInputMsg />
      <View style={global.header}>
        <View />
        <Text style={global.headerText}>{contactName}</Text>
        <View />
      </View>
    </View>
  );
}
