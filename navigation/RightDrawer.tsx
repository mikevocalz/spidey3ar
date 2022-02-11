import React, { useEffect } from 'react';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

// import { AppConfigActions } from '../redux/actions';

import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'

import { resetRightDrawer } from '../redux/AppDrawer/appDrawerSlice'

import CustomRightDrawer from '../components/CustomRightDrawer';
import LeftDrawer from './LeftDrawer';

const Drawer = createDrawerNavigator();

const RightDrawer = ({ navigation }) => {

  const { rightDrawerState } = useAppSelector((state) => state.appDrawer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (rightDrawerState === 'toggle') {
      navigation.dispatch(DrawerActions.openDrawer());
      dispatch(resetRightDrawer());
    }
  }, [rightDrawerState === 'toggle']);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerType: 'front',

        drawerStyle: {
          backgroundColor: 'transparent',
          width: '100%',
        },
        overlayColor: 'transparent'

      }}
      drawerContent={(props) => <CustomRightDrawer {...props} />}>
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
};


export default RightDrawer;