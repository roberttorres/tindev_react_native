import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket'
]);

import Routes from './routes';
import Login from './pages/Login';

export default function App() {
  return (
   <Routes /> 
  );
}
