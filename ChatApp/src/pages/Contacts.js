import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import global from './styles/global';
import Fab from '../components/Fab';
import ContactContainer from '../components/ContactContainer';

export default function Contacts({ navigation }) {
  return (
    <>
      <View style={{ marginTop: 50 }} />
      <ScrollView>
        <ContactContainer
          chatData={{
            avatar: require('../assets/perfil2.jpg'),
            contactName: "Joãozinho"
          }}
        />
        <ContactContainer
          chatData={{
            avatar: require('../assets/perfil4.jpg'),
            contactName: "Jubileu"
          }}
        />
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
