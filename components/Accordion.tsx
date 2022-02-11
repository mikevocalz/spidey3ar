import React, { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, IconButton, Text, Box, View, Avatar, Progress } from 'native-base';

interface Props {
  title: string;
  subTitle: string;
  message: string;
}

const { width, height } = Dimensions.get('window');


const Accordion = ({ title, subTitle, message }: Props) => {
  const [expanded, setExpaned] = useState(false);

  const onToggleHandler = (expanded) => {
    (expanded) => setExpaned(expanded)
  }

  return (
    <>
      <Collapse isExpanded={expanded}
        onToggle={(expanded) => setExpaned(expanded)}
        style={{
          backgroundColor: 'rgba(255,255,255, 0.2)',
          borderRadius: width >= 531 ? 20 : 9,
          width: width > 541 ? (width - width / 4) : (width - 30),
          alignSelf: 'center',
          overflow: "hidden",
          marginBottom: 10
        }}>
        <CollapseHeader style={{
          flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10,
          paddingVertical: 15
        }}>

          <Avatar size={width > 541 ? '2xl' : 'lg'} source={require('../assets/images/avatars/Ned-avatar.jpg')}
            style={{
              borderColor: 'white',
              borderWidth: 1,
            }} >
            PP
          </Avatar>
          <Box style={{ marginLeft: 20 }}>
            <Text style={styles.accHeaderTitle}>{title}</Text>
            <Text style={styles.accHeaderSubTitle}>{subTitle}</Text>
          </Box>
          <IconButton
            disabled
            style={{
              position: 'absolute',
              right: 15
            }}
            rounded='full'
            size={width > 541 ? 'lg' : 'md'}
            variant="solid"
            bg={'light.400'}
            opacity={.3}
            _pressed={{
              bg: 'light.200'
            }}
            _icon={{
              as: MaterialCommunityIcons,
              name: expanded === false ? "play" : "pause"
            }} />

        </CollapseHeader>
        <CollapseBody
          style={{
            alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', overflow: "hidden",
            backgroundColor: 'rgba(255,255,255, 0.2)',
            paddingHorizontal: 10,
            paddingVertical: 10
          }}>
          <Box w="100%" >
            <Progress colorScheme={'light'} mt={2} bg={'coolGray.400'} value={3} mx="4" />
          </Box>
          <Text style={styles.messageStyle}>{message}</Text>
        </CollapseBody>
      </Collapse>
    </>
  );
};

const styles = StyleSheet.create({
  accHeaderSubTitle: {
    fontSize: fontPixel(18),
    color: 'darkgrey',
    paddingTop: width > 541 ? 40 : 0,
    marginTop: width > 541 ? -20 : 0

  },
  accHeaderTitle: {
    fontSize: fontPixel(24),
    color: '#fff',
    fontWeight: '700',
    paddingTop: width > 541 ? 40 : 0,
    marginTop: width > 541 ? -20 : 0
  },
  messageStyle: {
    marginTop: 10,
    fontSize: fontPixel(20),
    paddingTop: width > 541 ? 20 : 0,
    lineHeight: width > 541 ? 30 : 20,
    textAlign: 'center'
  }
});

export default Accordion;