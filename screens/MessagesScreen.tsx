import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, Platform, Dimensions, ImageBackground } from 'react-native';
import { Text, Box, View, Avatar, ScrollView } from 'native-base';
import { RootTabScreenProps } from '../types';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Accordion from "../components/Accordion";
import MessageListItem, { AvatarProps } from "../components/MessageListItem";

const { width, height } = Dimensions.get('window');

export const messageData: AvatarProps[] = [
  {
    _id: 1,
    name: 'Betty',
    date: 'Sunday, 1:05PM',
    avatar: require('../assets/images/avatars/Betty-avatar.jpg'),
    messages: [
      'OMG Peter I can\'t believe it.',
      'Are you going to be at school tomorrow?',
      'Can i get an interview with you?'
    ],
    user: {
      _id: 2,
      name: 'Peter',
      avatar: require('../assets/images/avatars/PP-avatar.jpg'),
      messages: [
        'OMG'
      ],
    },
  },
]

//   {
//     _id: 2,
//     name: 'Flash',
//     date: 'Sunday, 1:23PM',
//     avatar: require('../assets/images/avatars/Betty-avatar.jpg'),
//     text: [
//       'You\'re Spider-Man??????????',
//       'Peterrr????',
//       'Peter Parker!!!? AWI;GOAE'
//     ],
//     user: {
//       _id: 0,
//       name: 'Peter',
//       avatar: require('../assets/images/avatars/PP-avatar.jpg'),
//       text: 'NOoooooooo'
//     },
//   },
//   {
//     _id: 3,
//     name: 'Ned',
//     date: 'Sunday, 9:33AM',
//     avatar: require('../assets/images/avatars/Ned-avatar.jpg'),
//     text: [
//       'Yo, WYD',
//       'Cool, catch you later',
//       'Dude',
//       'Dudddeeee',
//       'DUDEEE',
//       'Call me bakkkkkkkk'
//     ],
//     user: {
//       _id: 0,
//       name: 'Peter',
//       avatar: require('../assets/images/avatars/PP-avatar.jpg'),
//       text: 'Hey Man'
//     },
//   },
// ]



function MessagesScreen({ navigation }: RootTabScreenProps<'MessagesScreen'>) {


  return (
    <ImageBackground style={styles.container}
      source={require('../assets/images/MichelleMJ.jpg')} >
      <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
        <Text style={styles.title}>Messages</Text>
        {/* //Add  Messages */}
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {messageData.map(({ _id, name, date, avatar, messages, onPress }: message) =>
            <MessageListItem
              key={_id.toString()}
              name={name}
              date={date}
              avatar={avatar}
              messages={messages}
              isRead={true}
              onPress={() => navigation.navigate('MessagesDetaisScreen', {
                name: name,
                avatar: avatar,
                date: date,
                messages: messageData
              })}
            />
          )}
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
    paddingTop: width >= 531 ? '8%' : 30,
    fontSize: fontPixel(45),
    fontWeight: '300',
    textAlign: 'left',
    fontFamily: 'The-Amazing-Spider-Man',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginHorizontal: 20,
    marginVertical: width >= 531 ? 30 : '10%',
    marginTop: width >= 531 ? '14%' : '28%',
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




});

export default MessagesScreen