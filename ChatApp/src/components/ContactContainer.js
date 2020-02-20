/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import contactContainer from './styles/contact-container';

// import { Container } from './styles';

export default function ContactContainer({ onPress, chatData }) {
  return (
    <TouchableOpacity onPress={onPress} style={contactContainer.container} activeOpacity={0.8}>
      <View style={{ flexDirection: "row" }}>
        <Image source={chatData.avatar} style={{ width: 50, height: 50, borderRadius: 50 }} />
        <View style={contactContainer.textContainer}>
          <Text style={contactContainer.contactText}>{chatData.contactName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
