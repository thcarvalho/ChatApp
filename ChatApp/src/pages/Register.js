/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import global from './styles/global';
import login from './styles/login';
import BackButton from '../components/BackButton';

export default function Register({ navigation }) {
  return (
    <View style={global.container}>
      <TextInput placeholder="Digite seu nickname" style={[global.textInput, { marginTop: 50 }]} />
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={login.btnLogin}>
        <Text style={login.textBtn}>CADASTRAR</Text>
      </TouchableOpacity>
      <View style={global.header}>
        <BackButton onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}
