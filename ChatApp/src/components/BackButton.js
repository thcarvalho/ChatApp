import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

export default function BackButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="ios-arrow-back" size={24} color="#797979" />
    </TouchableOpacity>
  );
}
