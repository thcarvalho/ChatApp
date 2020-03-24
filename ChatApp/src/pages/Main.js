/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import IconMA from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import BackButton from '../components/BackButton';
import ChatContainer from '../components/ChatContainer';

import global from './styles/global';

import socket from "../services/websocket";
import api from "../services/api";

import getId from '../utils/getId';

export default function Main({ navigation }) {
  const [chats, setChats] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    getId().then(user => setId(user));
  }, []);

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    getId()
      .then(user => {
        const io = socket(user);
        io.on('sendMessage', () => getChats());
      });
  }, [chats]);

  async function getChats() {
    try {
      const user = await getId();
      const response = await api.get('/chat', {
        params: {
          user,
        },

      });

      setChats(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function logout() {
    AsyncStorage.removeItem('@userId');
    navigation.navigate("Login");
  }



  return (
    <>
      <View style={{ marginTop: 50 }} />
      <ScrollView>
        {
          chats.map(chat => {
            if (chat.users[0].userId === id) {
              return (
                <ChatContainer
                  chatData={{
                    contactName: chat.users[1].username,
                    lastMessage: chat.messages[chat.messages.length - 1].message,
                    avatar: require('../assets/perfil2.jpg'),
                  }}
                  onPress={() => navigation.navigate('Chat', {
                    contact: {
                      username: chat.users[1].username,
                      userId: chat.users[1].userId,
                    },
                    chat,
                  })}
                />
              );
            } else {
              return (
                <ChatContainer
                  chatData={{
                    contactName: chat.users[0].username,
                    lastMessage: chat.messages[chat.messages.length - 1].message,
                    avatar: require('../assets/perfil2.jpg'),
                  }}
                  onPress={() => navigation.navigate('Chat', {
                    contact: {
                      username: chat.users[0].username,
                      userId: chat.users[0].userId,
                    },
                    chat,
                  })}
                />
              )
            }
          })
        }
      </ScrollView>
      <View style={global.header}>
        <BackButton onPress={logout} />
        <Text style={global.headerText}>Conversas</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={getChats}>
          <IconMA name="reload" size={25} color="#797979" />
        </TouchableOpacity>
      </View>
    </>
  );
}
