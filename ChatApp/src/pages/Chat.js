/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ToastAndroid, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import global from './styles/global';
import TextInputMsg from '../components/TextInputMsg';
import MessageSend from '../components/MessageSend';
import MessageReceived from '../components/MessageReceived';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import socket from "../services/websocket";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getId from '../utils/getId';

export default function Chat({ navigation }) {
  const [contact, setContact] = useState('');
  const [chat, setChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [scrollView, setScrollView] = useState('');
  // const [loading, setLoading] = useState(true);


  useEffect(() => {
    const contactData = navigation.getParam("contact");
    setContact(contactData);

    const chatData = navigation.getParam("chat");
    console.log("1", chatData);

    if (chatData) {
      setChat(chatData);
      setMessages(chatData.messages);
    }
  }, [navigation]);


  useEffect(() => {
    getId()
      .then(user => {
        const io = socket(user);
        io.on('sendMessage', () => getMessages());
      })
  }, [messages]);



  async function getMessages() {
    if (chat === undefined) {
      console.log("2", chat);
      return false;
    } else {
      try {
        const response = await api.get(`/chat/message/${chat._id}`);
        console.log("3", chat);

        setMessages(response.data);
        scrollView.scrollToEnd({ animated: false });
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }

  async function sendMessage() {
    if (messageInput) {
      const id = await AsyncStorage.getItem('@userId');
      try {
        const user = await api.get(`/users/${id}`);
        const response = await api.post('/chat', {
          users: [{
            userId: contact.userId,
            username: contact.username,
          }, {
            userId: id,
            username: user.data.username,
          }],
        });


        const { _id } = response.data[0] || response.data;

        // console.log(response.data);

        // setChat(response.data)

        await api.put(`/chat/message/${_id}`, {
          by: id,
          message: messageInput,
        });

        scrollView.scrollToEnd({ animated: false });
        setMessageInput('');
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      return null;
    }
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-300}
      behavior='padding'
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ marginTop: 50 }}
        ref={ref => setScrollView(ref)}
        onContentSizeChange={() => scrollView.scrollToEnd({ animated: false })}
      >
        {
          messages.map(message => {
            if (message.by === contact.userId) {
              return (
                <MessageReceived message={message.message} />
              )
            } else {
              return (
                <MessageSend message={message.message} />
              )
            }
          })
        }
      </ScrollView>
      <TextInputMsg
        onPress={sendMessage}
        onChangeText={messageInput => setMessageInput(messageInput)}
        value={messageInput}
      />
      <View style={global.header}>
        <View />
        <Text style={global.headerText}>{contact.username}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={getMessages}>
          <Icon name="reload" size={25} color="#797979" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
