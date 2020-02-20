/* eslint-disable prettier/prettier */
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
      navigationOptions: () => ({
        headerTransparent: true,
        headerShown: false,
        headerLeft: BackButton,
        headerLeftContainerStyle: {
          paddingLeft: 16,
        },
      }),
    }
  })
);

