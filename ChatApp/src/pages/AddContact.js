/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, ToastAndroid } from 'react-native';
import global from './styles/global';
import Fab from '../components/Fab';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export default function AddContact({ navigation }) {
  const [username, setUsername] = useState('');

  async function addContact() {
    if (username) {
      const id = await AsyncStorage.getItem('@userId');
      await api.post(`/users/${id}/contact`, { username })
        .then(() => {
          ToastAndroid.show('Contato adicionado com sucesso!', ToastAndroid.SHORT);
          navigation.goBack();
        })
        .catch(error =>
          ToastAndroid.show(error.response.data.error, ToastAndroid.SHORT)
        );
    } else {
      ToastAndroid.show('Por Favor, informe o nickname do usuário', ToastAndroid.SHORT);

    }
  }

  return (
    <View style={global.container}>
      <TextInput
        style={global.textInput}
        placeholder="Digite o nickname do usuário"
        onChangeText={username => setUsername(username)}
        value={username}
      />
      <Fab
        onPress={addContact}
      >
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
