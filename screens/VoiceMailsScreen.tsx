import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, Platform, Dimensions, ImageBackground } from 'react-native';
import { Text, Box, View, Avatar, ScrollView } from 'native-base';
import { RootTabScreenProps } from '../types';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Accordion from "../components/Accordion";

const { width, height } = Dimensions.get('window');


function VoicemailsScreen({ navigation }: RootTabScreenProps<'VoicemailsScreen'>) {



  return (
    <ImageBackground style={styles.container}
      source={require('../assets/images/MichelleMJ.jpg')} >
      <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
        <Text style={styles.title}>Voicemails</Text>
        {/* //Add Voicemails */}
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Accordion
            title={'Ned'}
            subTitle={'Tuesday, 10:35AM'}
            message={'Hey man, dont look at the Daily Bugle today, it\'s pretty bad'}
          />
          <Accordion
            title={'Ned'}
            subTitle={'Tuesday, 3:35AM'}
            message={'Sorry i\'m blowing you up. Call me whenever. It\'s getting out  of control, but i want you to know i\'ve got your back no matter what.'}
          />
        </ScrollView>
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
    paddingTop: width >= 531 ? '7%' : 33,
    fontSize: fontPixel(45),
    fontWeight: '300',
    fontFamily: 'The-Amazing-Spider-Man',
    textTransform: 'uppercase',
    letterSpacing: 3,
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: width >= 531 ? 30 : '10%',
    marginTop: width >= 531 ? '14%' : '28%'
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

export default VoicemailsScreen