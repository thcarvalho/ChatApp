import React from 'react';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

import Routes from './src/routes/routes';
console.disableYellowBox = true;

const App = () => <Routes />;

export default App;
