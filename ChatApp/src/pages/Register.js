/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import global from './styles/global';
import login from './styles/login';
import BackButton from '../components/BackButton';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');

  async function registerUser() {
    if (username) {
      try {
        const response = await api.post('/users', {
          username,
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
        style={[global.textInput, { marginTop: 50 }]}
        onChangeText={username => setUsername(username)}
        value={username}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <TouchableOpacity onPress={registerUser} style={login.btnLogin}>
        <Text style={login.textBtn}>CADASTRAR</Text>
      </TouchableOpacity>
      <View style={global.header}>
        <BackButton onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}
