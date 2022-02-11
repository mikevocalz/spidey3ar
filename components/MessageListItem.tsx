import React, { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, Dimensions, ImageProps } from "react-native";
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, IconButton, Text, Box, View, Avatar, Progress, Pressable } from 'native-base';

export interface AvatarProps {
  _id: number | string;
  name: string;
  messages: string[] | string;
  date: string;
  isRead?: boolean;
  avatar: ImageProps['source'];
  onPress?: () => void | any;
  user?: User
}
type User = {
  _id: number,
  name?: string,
  avatar?: ImageProps['source'],
  messages?: string[] | string
}

const { width, height } = Dimensions.get('window');


const MessageListItem = ({ name, isRead, avatar, messages, onPress }: AvatarProps) => {

  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Box style={styles.container}>
        <Avatar size={width > 541 ? '2xl' : 'md'} source={avatar}
          style={{
            borderColor: 'white',
            borderWidth: 1,
          }} >
          PP
        </Avatar>
        <Box style={{ marginLeft: 20 }}>
          <Text style={styles.accHeaderTitle}>{name}</Text>
          {/* //Get the Last message in Messages Array  */}
          <Text style={styles.accHeaderSubTitle}>{messages[messages.length - 1]}</Text>
        </Box>

        <Box style={styles.rightCont}>
          {
            isRead && <Icon as={MaterialCommunityIcons}
              size={width >= 541 ? 4 : 2}
              name="circle" color={'blue.300'} />
          }
          <Icon as={MaterialCommunityIcons}
            size={width >= 541 ? 10 : 7}
            name="chevron-right" color="#fff" />
        </Box>
      </Box >
    </Pressable >
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255, 0.2)',
    borderRadius: width >= 531 ? 20 : 9,
    width: width > 541 ? (width - width / 4) : (width - 30),
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,

  },
  accHeaderSubTitle: {
    fontSize: fontPixel(18),
    color: 'darkgrey',
    paddingTop: width > 541 ? '2%' : 0

  },
  accHeaderTitle: {
    fontSize: fontPixel(24),
    color: '#fff',
    fontWeight: '700',
    paddingTop: width > 541 ? '5%' : 0

  },
  rightCont: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    right: 15,
    top: 8,
    zIndex: 100
  }
});

export default MessageListItem