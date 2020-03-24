/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from "@react-native-community/async-storage";
import qs from "qs";

import global from './styles/global';
import Fab from '../components/Fab';
import ContactContainer from '../components/ContactContainer';
import api from "../services/api";

export default function Contacts({ navigation }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const id = await AsyncStorage.getItem('@userId');
        const response = await api.get(`/contact/${id}`);
        console.log("10", response.data);

        setContacts(response.data);
      } catch (error) {
        console.log(error.response.data);
        ToastAndroid.show('Não foi possivel recuperar os contatos no momento', ToastAndroid.SHORT);
      }
    }
    getContacts();
  }, []);

  async function goToChat({ userId, username }) {
    const id = await AsyncStorage.getItem('@userId');
    try {
      const user = await api.get(`/users/${id}`);
      const response = await api.get(`/chat/contact`, {
        params: {
          users: [{
            userId: id,
            username: user.data.username,
          }, {
            userId,
            username,
          }],
        },
        paramsSerializer: params => {
          return qs.stringify(params);
        },
      });

      if (response.data.length === 0) {
        console.log("Não chegou aqui");
        navigation.navigate('Chat', {
          contact: { username, userId },
        });
      } else {
        console.log("Chegou aqui");
        console.log(response.data[0]);
        navigation.navigate('Chat', {
          contact: { username, userId },
          chat: response.data[0],
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <View style={{ marginTop: 50 }} />
      <ScrollView>
        {
          contacts.map(contact => (
            <ContactContainer
              key={contact.userId}
              onPress={() => goToChat(contact)}
              chatData={{
                avatar: require('../assets/perfil1.jpg'),
                contactName: contact.username,
              }}
            />
          ))
        }
      </ScrollView>
      <View style={global.header}>
        <View />
        <Text style={global.headerText}>Contatos</Text>
        <View />
      </View>
      <Fab onPress={() => navigation.navigate('AddContact')}>
        <Icon name="plus" size={22} color="#fff" />
      </Fab>
    </>
  );
}
