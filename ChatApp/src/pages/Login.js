/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import global from './styles/global';
import login from './styles/login';

export default function Login({ navigation }) {
  return (
    <View style={global.container}>
      <TextInput placeholder="Digite seu nickname" style={[global.textInput, { marginTop: 100 }]} />
      <TouchableOpacity onPress={() => navigation.navigate('Main')} style={login.btnLogin}>
        <Text style={login.textBtn}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>Ou</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={login.textCadastre}>Cadastre seu Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}
