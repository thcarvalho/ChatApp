/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import global from './styles/global';
import login from './styles/login';
import api from "../services/api";
import AsyncStorage from "@react-native-community/async-storage";

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@userId').then(id => {
      if (id) {
        navigation.navigate('Main');
      }
    })
  })

  async function loginUser() {
    if (username) {
      try {
        const response = await api.get('/auth', {
          params: { username },
        });

        const { _id } = response.data;

        await AsyncStorage.setItem('@userId', _id);
        await AsyncStorage.setItem('@username', username);
        navigation.navigate('Main');
      } catch (error) {
        ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT);
        console.log(error.response.data);
      }
    } else {
      ToastAndroid.show('Informe seu nickname, por favor', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={global.container}>
      <TextInput
        placeholder="Digite seu nickname"
        style={[global.textInput, { marginTop: 100 }]}
        onChangeText={username => setUsername(username)}
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
      />
      <TouchableOpacity onPress={loginUser} style={login.btnLogin}>
        <Text style={login.textBtn}>ENTRAR</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>Ou</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={login.textCadastre}>Cadastre seu Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}
