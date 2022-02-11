import React, { useState, useCallback, useRef, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import { StyleSheet, Platform, Dimensions, ImageBackground } from 'react-native';
import { Text, Box, View, Avatar, ScrollView } from 'native-base';
import { RootTabScreenProps } from '../types';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Accordion from "../components/Accordion";

const { width, height } = Dimensions.get('window');


function MessageDetailsView({ navigation, route }: RootTabScreenProps<'MessageDetailsView'>) {
  const messages = route.params.messages
  return (
    <ImageBackground style={styles.container}
      source={require('../assets/images/MichelleMJ.jpg')} >
      <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
        <Text style={styles.title}>{route.params.date}</Text>
        {/* //Add Voicemails */}
        {/* <ScrollView contentInsetAdjustmentBehavior="automatic" co> */}
        <GiftedChat
          messages={messages}
          onSend={() => null}
          placeholder={'...type your message'}
          text={'hello'}
          showUserAvatar
          user={{
            _id: 2,
            name: 'Peter Parker',
            avatar: require('../assets/images/avatars/PP-avatar.jpg')
          }}
          alwaysShowSend
        />

      </BlurView>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: Platform.OS === 'ios' ? 60 : 80,
  },
  title: {
    color: 'white',
    paddingTop: width >= 531 ? '7%' : 15,
    fontSize: fontPixel(15),
    fontWeight: '300',
    fontFamily: 'Noize-Sport',
    textTransform: 'uppercase',
    letterSpacing: 3,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: width >= 531 ? 30 : '10%',
    marginTop: width >= 531 ? '6%' : '20%'
  },
  blurContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? 'rgba(2, 22, 86, .6)' : 'rgba(2, 22, 86, 1)',
    height: height,
    width: width,
    marginTop: Platform.OS === 'ios' ? -60 : -80,
  },
  vmailContainer: {
    borderRadius: width >= 531 ? 20 : 9,
    width: widthPixel(360),
    maxWidth: width >= 531 ? widthPixel(300) : widthPixel(360),
    alignSelf: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    // height: heightPixel(400)

  },
  accHeaderSubTitle: {
    fontSize: fontPixel(18),
    color: 'darkgrey',

  },
  accHeaderTitle: {
    fontSize: fontPixel(24),
    color: '#fff',
    fontWeight: '700'
  },



});

export default MessageDetailsView