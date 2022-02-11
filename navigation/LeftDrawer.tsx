import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './MainStack';

import CustomLeftDrawer from '../components/CustomLeftDrawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const LeftDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: 'transparent',
          width: '100%',
        },
        overlayColor: 'transparent'
      }}

      drawerContent={(props) => <CustomLeftDrawer {...props} />}>
      <Stack.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};
export default LeftDrawer