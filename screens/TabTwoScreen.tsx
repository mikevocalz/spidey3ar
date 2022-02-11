import React, { useEffect, useCallback } from 'react';
import { StyleSheet, ImageBackground, Dimensions, Platform } from 'react-native';
import { Text, Box, HStack, Center, Badge, Icon, IconButton, Avatar, Pressable, Button } from 'native-base';
import { RootTabScreenProps } from '../types';
import { heightPixel, widthPixel, fontPixel } from '../normalize';
import {
  Entypo
  , MaterialCommunityIcons
} from '@expo/vector-icons';
import DateTime from '../components/DateTime';
import { DrawerActions } from '@react-navigation/native';

import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks'
import { openRightDrawer, toggleRightDrawer } from '../redux/AppDrawer/appDrawerSlice';

import { resetRightDrawer } from '../redux/AppDrawer/appDrawerSlice'

const { width, height } = Dimensions.get('window');

const PressableView = width > 541 ? Pressable : Box;

function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const { rightDrawerState } = useAppSelector((state) => state.appDrawer)
  const dispatch = useAppDispatch()


  const onOpenDrawerRight = useCallback(() => {
    // playSound()
    dispatch(toggleRightDrawer());

  }, []);
  return (
    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
      }}
      imageStyle={{
        resizeMode: 'cover',
        height: '100%',
        width: '100%',

      }}
      source={require('../assets/images/MichelleMJ.jpg')} >
      <Box style={{ marginTop: fontPixel(25), width: width, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10 }}>
        <Avatar size={'md'} source={require('../assets/images/avatars/PP-avatar.jpg')}
          style={{
            borderColor: 'white',
            borderWidth: 1
          }} >
          PP
        </Avatar>
        <Text adjustsFontSizeToFit fontSize={fontPixel(30)}
          minimumFontScale={0.1} style={{
            marginLeft: 10,
            marginTop: 8, letterSpacing: 1, alignItems: 'center', fontFamily: 'The-Amazing-Spider-Man', textTransform: 'uppercase', color: '#fff', textAlign: 'left'
          }} >Peter Parker</Text>

        <Icon as={MaterialCommunityIcons}
          onPress={onOpenDrawerRight}
          size={width >= 541 ? fontPixel(30) : 8}
          name="text" color="#fff"
          style={{ position: 'absolute', right: 15, }} />
      </Box>
      {/* ///End of Header */}
      <DateTime />


      <HStack space={6}
        style={{
          paddingTop: 10,
          alignItems: 'center',
          alignSelf: 'center',
          height: heightPixel(140),
          width: widthPixel(380),
          justifyContent: "center", borderRadius: widthPixel(10),
          backgroundColor: 'rgba(0,0,0,0.8)',
        }} >
        <Center marginTop={width >= 541 ? 2 : 0}>
          <IconButton
            onPress={() => navigation.navigate('PhotosScreen')}
            style={{
              borderRadius: width >= 541 ? 12 : 8
            }}
            bg={'fuchsia.500'}
            size={width >= 541 ? '24' : 'lg'} variant="solid"
            _pressed={
              {
                bg: 'fuchsia.400',
                // width: width >= 541 ? '24' : 'lg'
              }}
            _icon={{
              as: MaterialCommunityIcons,
              onPress: () => navigation.navigate('PhotosScreen'),
              name: "image",
              size: width > 541 ? '2xl' : 'md',
              style: {
                marginVertical: width > 541 ? '20%' : 0,
                marginHorizontal: width > 541 ? '20%' : 0
              }
            }} />
          <Text style={styles.btnHeading}>Photos</Text>
        </Center>
        <Center marginTop={-7}>
          <Badge
            style={{
              marginRight: -15,
              marginTop: 20,
              alignSelf: 'flex-end',
              zIndex: 100
            }}
            colorScheme="danger" rounded="full"
            variant="solid"
            _text={{
              fontSize: width > 541 ? 16 : 12
            }}>
            7
          </Badge>
          <IconButton
            onPress={() => navigation.navigate('MessagesScreen')}
            style={{
              borderRadius: width >= 541 ? 12 : 8,
              marginTop: -15,
            }}
            size={width >= 541 ? 'xl' : 'lg'}

            _pressed={
              {
                bg: 'blue.300',
              }}
            variant="solid"
            _icon={{
              as: Entypo,
              name: "chat",
              size: width > 541 ? '2xl' : 'md',
              style: {
                marginVertical: width > 541 ? '20%' : 0,
                marginHorizontal: width > 541 ? '20%' : 0
              }
            }} />
          <Text style={styles.btnHeading}>Messages</Text>
        </Center>
        <Center marginTop={-7}>
          <Badge
            style={{
              marginRight: -15,
              marginTop: 20,
              alignSelf: 'flex-end',
              zIndex: 100
            }}
            colorScheme="danger" rounded="full"
            variant="solid"
            _text={{
              fontSize: width > 541 ? 16 : 12
            }}>
            2
          </Badge>
          <IconButton
            onPress={() => navigation.navigate('VoicemailsScreen')}
            style={{
              borderRadius: width >= 541 ? 12 : 8,
              marginTop: -15
            }}
            bg={'tertiary.500'}
            size={width >= 541 ? 'xl' : 'lg'}
            _pressed={{
              bg: 'tertiary.400',
            }}
            variant="solid"
            _icon={{
              as: Entypo,
              name: "phone",
              size: width > 541 ? '2xl' : 'md',
              // style: {
              //   marginVertical: width > 541 ? '20%' : 0,
              //   marginHorizontal: width > 541 ? '20%' : 0
              // }
            }} >
          </IconButton>
          <Text style={styles.btnHeading}>Voicemails</Text>
        </Center>
      </HStack>

    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: heightPixel(400),
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnHeading: {
    fontSize: fontPixel(12),
    fontWeight: '500',
    color: 'white'
  },
});

export default TabTwoScreen