/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import global from './styles/global';
import BackButton from '../components/BackButton';
import ChatContainer from '../components/ChatContainer';
import Fab from '../components/Fab';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Main({ navigation }) {
  return (
    <>
      <View style={{ marginTop: 50 }} />
      <ScrollView>
        <ChatContainer
          chatData={{
            contactName: "Joãozinho",
            lastMessage: "Olá, tudo bem?",
            avatar: require('../assets/perfil2.jpg'),
            haveNewMessage: 1,
          }}
          onPress={() => navigation.navigate('Chat', { contactName: "Joãozinho" })}
        />
        <ChatContainer chatData={{
          contactName: "Cremildo",
          lastMessage: "Bora pro rolê?",
          avatar: require('../assets/perfil1.jpg'),
        }} />
        <ChatContainer chatData={{
          contactName: "Jubileu",
          lastMessage: "Cadê meu dinheiro?",
          avatar: require('../assets/perfil4.jpg'),
          haveNewMessage: 2,
        }} />
        <ChatContainer chatData={{
          contactName: "Téteia",
          lastMessage: "Oii sumido",
          avatar: require('../assets/perfil3.jpg'),
        }} />
      </ScrollView>
      <View style={global.header}>
        <BackButton onPress={() => navigation.navigate("Login")} />
        <Text style={global.headerText}>Conversas</Text>
        <View />
      </View>
      {/* <Fab onPress={() => navigation.navigate('AddContact')}>
        <Icon name="plus" size={22} color="#fff" />
      </Fab> */}
    </>
  );
}
