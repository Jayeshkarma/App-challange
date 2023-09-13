// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { BottomTabs } from './bottomTab';

const Route = () => {
  return (
    <NavigationContainer>
    <BottomTabs/>
    </NavigationContainer>
  );
}

export default Route;
