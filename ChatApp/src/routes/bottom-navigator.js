/* eslint-disable prettier/prettier */
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import IconEn from 'react-native-vector-icons/Entypo';
import IconIo from 'react-native-vector-icons/Ionicons';
import IconAd from 'react-native-vector-icons/AntDesign';

import Main from "../pages/Main";
import Contacts from "../pages/Contacts";
import Configs from '../pages/Configs';

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <IconEn
              name="message"
              size={25}
              color={focused ? '#797979' : "#ccc"}
            />
          ),
        },
      },
      Contacts: {
        screen: Contacts,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <IconIo
              name="md-people"
              size={25}
              color={focused ? '#797979' : "#ccc"}
            />
          ),
        },
      },
      Configs: {
        screen: Configs,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <IconAd
              name="setting"
              size={25}
              color={focused ? '#797979' : "#ccc"}
            />
          ),
        },
      },
    },
    {
      initialRouteName: 'Main',
      activeColor: '#797979',
      inactiveColor: '#ccc',
      barStyle: {
        backgroundColor: '#fff',

      },
    },
  ),
);
