/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import global from './styles/global';
import Fab from '../components/Fab';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddContact() {
  return (
    <View style={global.container}>
      <TextInput style={global.textInput} placeholder="Digite o nickname do usuário" />
      <Fab>
        <Icon name="check" size={22} color="#fff" />
      </Fab>
      <View style={global.header}>
        <View />
        <Text style={global.headerText}>Novo Contato</Text>
        <View />
      </View>
    </View>
  );
}
