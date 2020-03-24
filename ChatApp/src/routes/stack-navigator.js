/* eslint-disable prettier/prettier */
import React from "react";
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './bottom-navigator';
import AddContact from '../pages/AddContact';
import Chat from '../pages/Chat';
import BackButton from '../components/BackButton';

export default createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: () => ({
        headerTransparent: true,
        headerShown: false,
      }),
    },
    AddContact: {
      screen: AddContact,
      navigationOptions: () => ({
        headerTransparent: true,
        headerShown: false,
        headerLeft: BackButton,
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
      }),
    },
    Chat: {
      screen: Chat,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        headerShown: false,
        headerLeft: (<BackButton onPress={() => navigation.navigate('Main')} />),
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
      }),
    }
  })
);

