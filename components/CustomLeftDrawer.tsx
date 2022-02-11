import React, { useCallback } from 'react';
import { Box, Text, Pressable, Icon, Divider, Image, Center, VStack } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { StackActions, CommonActions } from '@react-navigation/native';

import { ImageBackground, Dimensions } from 'react-native';
import { NavigationDrawerProp, NavigationDrawerScreenProps } from '@react-navigation/drawer';

import {
  useDrawerStatus,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import MenuItem from './MenuItem';
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from '../normalize';
import { Audio } from 'expo-av';
import { MotiView, motify } from 'moti'

interface Props {
  navigation: any
}
const CloseSrc = require('../assets/audio/close.wav');
const OpenSrc = require('../assets/audio/open.wav');

const MotifiedImageBackground = motify(ImageBackground)()
const MotifiedDrawSV = motify(DrawerContentScrollView)()

const { width, height } = Dimensions.get('window')
const CustomLeftDrawer = (props: Props) => {
  const { navigation } = props;
  const isDrawerOpen = useDrawerStatus();

  const playSound = React.useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(CloseSrc)

    sound.setVolumeAsync(Number(.09))
    await sound.playAsync();
  }, []);

  const onCloseDrawer = useCallback(() => {
    playSound();
    navigation.closeDrawer();

    navigation.dispatch(StackActions.pop(1))


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
      exitTransition={{
        type: 'timing',
        duration: 1000,
        delay: 100,
      }}
      transition={{
        type: 'timing',
        duration: 2500,
        delay: 50,
      }}
      style={{
        height: '100%',
        width: '100%',
      }}
      imageStyle={{
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
      }}
      source={require('../assets/images/sbackgroundb.jpg')} >
      <Box style={{ flex: 1 }}>
        {isDrawerOpen === "open" &&

          <MotifiedDrawSV
            from={{
              opacity: 0,
              translateX: - width
            }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            exit={{
              opacity: 0,
              translateX: width - width,
            }}
            transition={{
              type: 'timing',
              duration: 900,
              delay: 50,
            }}
            scrollEnabled={false} {...props}>
            <Box style={{ marginTop: 0, width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 }}>
              <Icon as={MaterialCommunityIcons} size={fontPixel(30)} name="close" color="#fff" onPress={onCloseDrawer}
                style={{ position: 'absolute', left: 10 }} />
              <Text adjustsFontSizeToFit fontSize={fontPixel(35)}
                minimumFontScale={0.1} style={{
                  marginTop: 8, letterSpacing: 1, alignItems: 'center', fontFamily: 'The-Amazing-Spider-Man', textTransform: 'uppercase', color: '#ff9900', textAlign: 'center'
                }} >Settings</Text>
            </Box>
            {/* //End of Header */}
            <Box style={{ flex: 1, alignSelf: 'center' }}>
              <Text adjustsFontSizeToFit fontSize={fontPixel(20)}
                minimumFontScale={0.1} style={{
                  flex: 1, flexGrow: 1, marginTop: 15, letterSpacing: 1, alignSelf: 'stretch',
                  textAlign: 'left', fontFamily: 'Noize-Sport', textTransform: 'uppercase', color: '#2B6BBD', marginLeft: 20
                }} >Legal</Text>
              <MenuItem
                label="Privacy Policy"
                isIcon={false}
                isSwitch={false}
                hasDivider={true}
                onPress={() => [
                  navigation.navigate('DetailsWebView', {
                    link: 'https://sites.sonypictures.com/corp/privacypolicies/PrivacyPolicy.html',

                  })
                ]
                }
              />
              <MenuItem
                label="Childrens Privacy Policy"
                isIcon={false}
                isSwitch={false}
                onPress={() => navigation.navigate('DetailsWebView', {
                  link: 'https://kidszone.sonypictures.com/corp/kids/privacy.html',
                })
                }
              />
              <MenuItem
                label="Terms Of Use"
                isIcon={false}
                isSwitch={false}
                onPress={() => navigation.navigate('DetailsWebView', {
                  link: 'https://www.sonypictures.com/corp/tos.html',
                })
                }
              />
              <MenuItem
                label="Films Ratings"
                isIcon={false}
                isSwitch={false}
                onPress={() => navigation.navigate('DetailsWebView', {
                  link: 'https://www.filmratings.com/Tips',
                })
                }
              />
              <MenuItem
                label="MPAA"
                isIcon={false}
                isSwitch={false}
                onPress={() => navigation.navigate('DetailsWebView', {
                  link: 'https://www.motionpictures.org',
                })
                }
              />
              <MenuItem
                label="Do Not Sell My Personal Information"
                isIcon={false}
                isSwitch={false}
                onPress={() => navigation.navigate('DetailsWebView', {
                  link: 'https://privacyportal-cdn.onetrust.com/dsarwebform/d19e506f-1a64-463d-94e4-914dd635817d/b9eb997c-9ede-451b-8fd4-29891782a928.html',
                })
                }
              />
              <MenuItem
                label="Opt-In for Data Tracking"
                isIcon={false}
                isSwitch={true}
                onPress={() => null}
              />

              <Text adjustsFontSizeToFit fontSize={fontPixel(20)}
                minimumFontScale={0.1} style={{
                  flex: 1, flexGrow: 1, letterSpacing: 1, marginTop: 15, alignSelf: 'stretch',
                  textAlign: 'left', fontFamily: 'Noize-Sport', textTransform: 'uppercase', color: '#2B6BBD', marginLeft: 20
                }} >Language</Text>
              <MenuItem
                label="English"
                isIcon={true}
                isSwitch={false}
                hasDivider={true}
                onPress={() => navigation.navigate('TabThreeScreen')}
              />
            </Box>
          </MotifiedDrawSV>
        }

      </Box>
      <Image alt={'nwh-bottom-img'} source={require('../assets/images/sony-footer.png')} style={{ zIndex: 100, alignSelf: 'center', resizeMode: 'contain', width: widthPixel(width), height: heightPixel(100), position: 'absolute', bottom: 10, }} />
    </MotifiedImageBackground >
  );
};

export default CustomLeftDrawer