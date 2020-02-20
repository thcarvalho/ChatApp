/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import chatContainer from './styles/chat-container';

// import { Container } from './styles';

export default function ChatContainer({ onPress, chatData }) {
  return (
    <TouchableOpacity onPress={onPress} style={chatContainer.container} activeOpacity={0.8}>
      <View style={{ flexDirection: "row" }}>
        <Image source={chatData.avatar} style={{ width: 50, height: 50, borderRadius: 50 }} />
        <View style={chatContainer.textContainer}>
          <Text style={chatContainer.contactText}>{chatData.contactName}</Text>
          <Text style={chatContainer.msgText}>{chatData.lastMessage}</Text>
        </View>
      </View>
      {
        chatData.haveNewMessage && (
          <View style={chatContainer.newMsgContainer}>
            <Text style={chatContainer.newMsgText}>{chatData.haveNewMessage}</Text>
          </View>
        )
      }
    </TouchableOpacity>
  );
}
