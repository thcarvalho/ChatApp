import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from './bottom-navigator';

export default createAppContainer(
  createSwitchNavigator({Login, Register, Main}),
);
