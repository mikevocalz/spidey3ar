import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, Pressable, Icon, Box, Image, Avatar } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Dimensions } from 'react-native';
import { Audio } from 'expo-av';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import DetailsWebView from '../screens/DetailsWebView';

import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hooks/reduxHooks'
import { openRightDrawer, toggleRightDrawer } from '../redux/AppDrawer/appDrawerSlice';
import { heightPixel, widthPixel, fontPixel } from '../normalize';
import { StackActions } from '@react-navigation/native';
import PhotosScreen from '../screens/PhotosScreen';
import MessagesScreen from '../screens/MessagesScreen';
import VoicemailsScreen from '../screens/VoiceMailsScreen';
import PhotoGalleryView from '../screens/PhotoGalleryView';
import MessageDetailsView from '../components/MessageDetailsView';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';

const CloseSrc = require('../assets/audio/open.wav');

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get('screen')
const isSmScreen = height <= 736;

const MainStack = ({ navigation, route }) => {

  const dispatch = useAppDispatch()

  const playSound = React.useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(CloseSrc)

    sound.setVolumeAsync(Number(.07))
    await sound.playAsync();

  }, []);

  const onOpenDrawerLeft = useCallback((route) => {
    playSound()

    navigation.openDrawer();
    // navigation.replace('TabOneScreen')
  }, []);

  const onGoBack = useCallback(() => {
    playSound();

    navigation.openDrawer();

  }, []);

  const onOpenDrawerRight = useCallback(() => {
    playSound()
    dispatch(toggleRightDrawer());

  }, []);

  const options = {
    headerShadowVisible: false,
    labelVisible: false,
    headerStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.)',
    },
    headerLeft: () => (
      <Icon as={FontAwesome} name="gear" color="#ff9900" onPress={onOpenDrawerLeft} />
    ),
    headerRight: () => (
      <Icon as={MaterialCommunityIcons} name="text" color="#ff9900" onPress={onOpenDrawerRight}
        style={{ transform: [{ rotateY: "180deg" }] }} />
    ),
  }

  const phoneStackOptions = {
    headerShadowVisible: false,
    labelVisible: false,
    headerTransparent: true,
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerLeft: () => (
      <Icon as={FontAwesome} size={width >= 541 ? 10 : 7} name="chevron-left" color="#fff" onPress={() => navigation.goBack()} />
    ),
    headerRight: () => (
      <Icon as={MaterialCommunityIcons}
        size={width >= 541 ? 10 : 7}
        name="text" color="#fff" onPress={onOpenDrawerRight}
        style={{ transform: [{ rotateY: "180deg" }] }} />
    ),
  }

  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,

      }}
      initialRouteName={'TabOneScreen'} >
      <Stack.Screen name="TabOneScreen" component={TabOneScreen}
        options={{
          ...options,
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{
              paddingTop: 23,
              fontSize: 30,
              fontFamily: 'The-Amazing-Spider-Man',
              color: '#ff0000'
            }} > @</Text>
          ),
          headerStyle: {
            //backgroundColor: '#021656',
            backgroundColor: 'rgba(2,2,86, .7)',

          },

        }} />
      <Stack.Group
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="TabTwoScreen" component={TabTwoScreen} />
        <Stack.Group screenOptions={{
          ...phoneStackOptions, headerShown: true,
          headerTitle: '',
          headerBackTitle: 'hey',
          headerBackTitleVisible: true
        }}>
          <Stack.Screen name="PhotosScreen" component={PhotosScreen} />
          <Stack.Screen
            options={({ route }) => ({
              title: route.params.name,
              headerRight: () => null,
              headerBackTitleVisible: false
            })}
            name="PhotoGalleryView" component={PhotoGalleryView} />
        </Stack.Group>
        <Stack.Group screenOptions={{
          ...phoneStackOptions, headerShown: true,
          headerTitle: '',
          headerBackTitle: 'hey',
          headerBackTitleVisible: true
        }}>
          <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
          <Stack.Screen
            options={({ route }) => ({
              headerBackTitle: null,
              headerBackTitleVisible: false,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#021656'
              },
              headerLeft: () => (
                <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon as={FontAwesome} size={width >= 541 ? 10 : 7} name="chevron-left" color="#fff" onPress={() => navigation.goBack()} />
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: fontPixel(18),
                      paddingTop: width > 541 ? '1.2%' : 0
                    }}
                  >Messages</Text>
                </Box>
              ),
              headerRight: () => (
                <Icon as={MaterialCommunityIcons}
                  size={width >= 541 ? 10 : 7}
                  name="text" color="#fff" onPress={onOpenDrawerRight}
                  style={{ transform: [{ rotateY: "180deg" }] }} />
              ),
              headerTitle: () => (
                <Box style={{ flexDirection: 'row', alignItems: 'center', marginTop: width > 541 ? -2 : 0 }}>
                  <Avatar size={width > 541 ? 'md' : 'sm'} source={require('../assets/images/avatars/Betty-avatar.jpg')}
                    style={{
                      borderColor: 'white',
                      borderWidth: 1,
                    }} >
                    PP
                  </Avatar>
                  <Text
                    style={{
                      marginLeft: 6,
                      color: '#fff',
                      fontSize: fontPixel(20),
                      paddingTop: width > 541 ? '2%' : 0
                    }}
                  >{route.params.name}</Text>
                </Box>
              )
            })}
            name="MessagesDetaisScreen" component={MessageDetailsView} />

        </Stack.Group>
        <Stack.Group screenOptions={{
          ...phoneStackOptions, headerShown: true,
          headerTitle: '',
          headerBackTitle: 'hey',
          headerBackTitleVisible: true
        }}>
          <Stack.Screen name="VoicemailsScreen" component={VoicemailsScreen} />
        </Stack.Group>
      </Stack.Group>
      <Stack.Screen name="TabThreeScreen" component={TabThreeScreen} />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          header: (props) =>
            <Box style={{ width: '100%', backgroundColor: '#021656', height: heightPixel(200), justifyContent: 'flex-end' }}>
              <Icon as={FontAwesome} name="chevron-left" size={fontPixel(30)}
                style={{ position: 'absolute', left: 10, top: isSmScreen ? 30 : 50 }}
                color="#ff9900"
                onPress={onGoBack} />
              <Image
                alt={'smnwh-logo'}
                style={{ alignSelf: 'center', bottom: 0 }}
                resizeMode='contain'
                height={heightPixel(150)}
                width={widthPixel(250)}
                source={require('../assets/images/snwo-logo.png')}
              />
            </Box>,
        })}
      >
        <Stack.Screen
          options={({ navigation, route }) => ({
            header: (props) =>
              <Box style={{ width: '100%', backgroundColor: '#021656', height: heightPixel(200), justifyContent: 'flex-end' }}>
                <Icon as={FontAwesome} name="chevron-left" size={fontPixel(30)}
                  style={{ position: 'absolute', left: 10, top: isSmScreen ? 30 : 50 }}
                  color="#ff9900"
                  onPress={() => navigation.pop()} />
                <Image
                  alt={'smnwh-logo'}
                  style={{ alignSelf: 'center', bottom: 0 }}
                  resizeMode='contain'
                  height={heightPixel(150)}
                  width={widthPixel(250)}
                  source={require('../assets/images/snwo-logo.png')}
                />
              </Box>,
          })}
          name="DetailsWebView" component={DetailsWebView} />
      </Stack.Group>
      <Stack.Group screenOptions={{
        ...phoneStackOptions, headerShown: true,
        headerRight: () => null,
        headerTitle: '',
        headerLeft: () =>
          <Icon as={FontAwesome} name="chevron-left" size={fontPixel(30)}
            color="#fff"
            onPress={() => navigation.pop()} />
      }}>
        <Stack.Screen name="TabFourScreen" component={TabFourScreen} />
        <Stack.Screen name="TabFiveScreen" component={TabFiveScreen} />
      </Stack.Group>
    </Stack.Navigator >
  );
};

export default MainStack