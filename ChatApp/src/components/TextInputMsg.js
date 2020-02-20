import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import textInputMsg from './styles/text-input-msg';

// import { Container } from './styles';

export default function TextInputMsg() {
  return (
    <View style={textInputMsg.container}>
      <TextInput
        style={textInputMsg.inputText}
        placeholder="Escreva alguma coisa..."
      />
      <TouchableOpacity activeOpacity={0.7} style={textInputMsg.fab}>
        <Icon name="send" size={20} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}
