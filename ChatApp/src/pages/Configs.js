import React from 'react';
import { View, Text } from 'react-native';
import global from './styles/global';

// import { Container } from './styles';

export default function Configs() {
  return (
    <View style={global.container}>
      <View style={global.header}>
        <View />
        <Text style={global.headerText}>Configurações</Text>
        <View />
      </View>
    </View>
  );
}
