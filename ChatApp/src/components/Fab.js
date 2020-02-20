import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import fab from './styles/fab';

// import { Container } from './styles';

export default function Fab({children, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={fab.container}>
      {children}
    </TouchableOpacity>
  );
}
