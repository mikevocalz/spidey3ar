import React, { useCallback } from 'react';
import { Box, Divider, Text, Icon, Pressable, Image, Button } from 'native-base';
import { ImageBackground, Platform, StatusBar, Dimensions } from 'react-native';

import { StackActions, CommonActions } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

import * as Linking from 'expo-linking';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import DeviceInfo from 'react-native-device-info';

import { NavigationDrawerProp, NavigationDrawerScreenProps } from '@react-navigation/drawer';
import {
  useDrawerStatus,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { fontPixel, heightPixel } from '../normalize';
import { MotiView, motify } from 'moti'

interface Props {
  navigation: any
}
const { width, height } = Dimensions.get('window')
const isSmScreen = height <= 736;
const bText = 'Get Updates &\nExclusive Content';
const FBscheme = Platform.select({ ios: 'fb://profile/', android: 'fb://page/' });
const FBPageID = 101206069955312;
const CloseSrc = require('../assets/audio/close.wav');

const MotifiedImageBackground = motify(ImageBackground)()
const MotifiedDrawSV = motify(DrawerContentScrollView)()

const CustomRightDrawer = (props: Props) => {
  const { navigation } = props;
  const isDrawerOpen = useDrawerStatus();

  const playSound = useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(CloseSrc)
    sound.setVolumeAsync(Number(.09))
    await sound.playAsync();
  }, []);

  const onCloseDrawer = useCallback(() => {
    playSound();
    navigation.dispatch(StackActions.pop())

    setTimeout(() =>
      navigation.closeDrawer(), 600
    )
  }, []);


  return (
    <MotifiedImageBackground
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      exitTransition={{ type: 'timing' }}

      transition={{
        type: 'timing',
        duration: 1000,
        delay: 50,
      }}
      style={{
        height: '100%',
        width: '100%'
      }}
      imageStyle={{
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
      }} source={require('../assets/images/sbackgroundb.jpg')} >
      <Icon zIndex={100} as={MaterialCommunityIcons} size={width > 541 ? 16 : 9} name="close" color="#fff" onPress={onCloseDrawer}
        style={{ position: 'absolute', right: 15, top: isSmScreen ? 30 : 50 }} />
      {isDrawerOpen === "open" &&
        <MotifiedDrawSV
          from={{
            opacity: 0,
            translateX: width
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          exit={{
            opacity: 0,
            translateX: width + width,
          }}
          exitTransition={{
            type: 'timing',
            duration: 1000,
            delay: 50,
          }}

          transition={{
            type: 'timing',
            duration: 600,
            delay: 50,
          }}
          scrollEnabled={false}
          contentContainerStyle={{ flex: 1, }}
          style={{ marginLeft: width >= 540 ? '20%' : 40 }}  {...props}>

          <Box style={{ flexGrow: 2, marginTop: '35%', alignItems: 'flex-start' }}>
            <Button
              _pressed={{
                backgroundColor: 'transparent'
              }}
              onPress={() =>
                navigation.navigate('TabOneScreen')
                // dispatch(DrawerActions.jumpTo('Root', { screen: 'TabOneScreen' }))
              }
              _text={{
                textAlign: 'left',
                color: 'white',
                fontSize: fontPixel(19),
                fontFamily: 'Noize-Sport',
                textTransform: 'uppercase',
              }}
              variant="ghost" >
              Home
            </Button>
            <Button
              onPress={() => navigation.navigate('TabTwoScreen')}
              _pressed={{
                backgroundColor: 'transparent'
              }}
              _text={{
                textAlign: 'left',
                color: 'white',
                fontSize: fontPixel(19),
                fontFamily: 'Noize-Sport',
                textTransform: 'uppercase',
              }}
              variant="ghost" >
              {"Peter Parkers\nPhone"}
            </Button>

            <Button
              _pressed={{
                backgroundColor: 'transparent'
              }}
              _text={{
                textAlign: 'left',
                color: 'white',
                fontSize: fontPixel(19),
                fontFamily: 'Noize-Sport',
                textTransform: 'uppercase',
              }}
              onPress={() => null}
              variant="ghost" >
              AR Suit Explorer
            </Button>

            <Button
              _pressed={{
                backgroundColor: 'transparent'
              }}
              _text={{
                textAlign: 'left',
                color: 'white',
                fontSize: fontPixel(19),
                fontFamily: 'Noize-Sport',
                textTransform: 'uppercase',
              }}
              onPress={() => navigation.navigate('TabFourScreen')}

              variant="ghost" >
              {'Spider-Man Suit\nSocial Lens'}
            </Button>

            <Button
              _pressed={{
                backgroundColor: 'transparent'
              }}
              _text={{
                textAlign: 'left',
                color: 'white',
                fontSize: fontPixel(19),
                fontFamily: 'Noize-Sport',
                textTransform: 'uppercase',
              }}
              onPress={() => navigation.navigate('TabFiveScreen')}
              variant="ghost" >
              Film
            </Button>

            <Divider style={{ backgroundColor: 'red', width: 100, marginLeft: 15, marginBottom: 15, marginTop: 10 }} />
            <Text
              style={{
                marginLeft: 15,
                marginBottom: 5,
                color: 'white',
                fontSize: fontPixel(16),
                fontFamily: 'Noize-Sport', textTransform: 'uppercase',
              }}>
              Follow on Social
            </Text>
            <Box style={{
              flexDirection: 'row', marginLeft: 15
            }}>
              <Icon onPress={() => Linking.openURL(`${FBscheme}${FBPageID}`)}
                as={MaterialCommunityIcons} size={width > 541 ? heightPixel(35) : fontPixel(10)} name="facebook" color="#ff0000"
              />
              <Icon as={MaterialCommunityIcons} size={width > 541 ? heightPixel(35) : fontPixel(10)} name="twitter" color="#ff0000" onPress={() => Linking.openURL('https://www.twitter.com/spidermanmovie')}
                style={{ marginLeft: 10 }}
              />
              <Icon as={MaterialCommunityIcons} size={width > 541 ? heightPixel(35) : fontPixel(10)} name="instagram" color="#ff0000" onPress={() => Linking.openURL('https://www.instagram.com/spidermanmovie')}
                style={{ marginLeft: 10 }}
              />
              <Icon
                as={
                  <Pressable style={{ flex: 1, height: 30, width: 30, marginTop: 4, marginLeft: 10 }}
                    onPress={() => Linking.openURL('https://www.tiktok.com/@spidermanmovie')}>
                    <Image
                      style={{
                        width: fontPixel(31),
                        height: fontPixel(31)
                      }}
                      alt='tiktok'
                      resizeMode='contain'
                      source={require('../assets/images/tiktok-16.png')}
                    />
                  </Pressable>
                } size={fontPixel(8)} name="tiktok" color="#ff0000"
                style={{ marginLeft: 10 }}
              />
            </Box>
            <Box style={{ flex: 1, flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
              <Icon
                as={MaterialCommunityIcons}
                size={width > 541 ? heightPixel(35) : fontPixel(10)} name="email" color="#ff0000" onPress={() => null}
              />
              <Text
                noOfLines={2}
                style={{
                  marginLeft: 15,
                  marginBottom: 20,
                  color: 'white',
                  lineHeight: width > 541 ? 24 : 14,
                  fontSize: fontPixel(13),
                  width: width > 541 ? 300 : 170,
                  marginTop: 1,
                  paddingTop: width > 541 ? 5 : 0,
                  fontFamily: 'Noize-Sport', textTransform: 'uppercase',
                }}>
                {
                  bText
                }
              </Text>
            </Box>
          </Box>
        </MotifiedDrawSV>
      }
    </MotifiedImageBackground >
  );
};

export default CustomRightDrawer