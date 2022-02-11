import React, { useState, useCallback } from 'react';
import { Box, Text, Pressable, Icon, Divider, HStack, Switch, Center } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fontPixel, pixelSizeHorizontal, pixelSizeVertical } from '../normalize';
import { Dimensions } from 'react-native'
type Props = {
  label: string,
  isSwitch: boolean,
  isIcon: boolean,
  hasDivider?: boolean,
  onPress: () => void
};
const { width } = Dimensions.get('screen')

const MenuItem = ({ label, isSwitch, isIcon, hasDivider, onPress }: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const isLarge = width > 560 ? 10 : 0
  return (
    <Pressable marginTop="1" onPress={onPress} justifyContent={'center'} maxW={600}>
      {hasDivider &&
        <Divider maxW={600} style={{ backgroundColor: 'grey', height: 0.5, width: '92%', alignSelf: 'center', marginTop: 5 }} />
      }
      <HStack px="4" justifyContent={'space-between'} alignItems={'center'} maxW={600} >
        <Box flexDirection={'row'} >
          {isIcon &&
            <Text fontSize={fontPixel(38)} style={{
              position: 'absolute', marginTop: pixelSizeVertical(-15)
            }}>🇺🇸</Text>
          }
          <Text numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={.1}
            textBreakStrategy={'simple'}
            color="#fff"
            style={{
              paddingTop: isLarge,
              alignSelf: 'stretch',
              textAlign: 'center',
              letterSpacing: 1, marginTop: 5, marginLeft: isIcon ? fontPixel(55) : 5, fontSize: fontPixel(18)
            }}>
            {label}
          </Text>
        </Box>
        <Box>
          {isSwitch ? <Switch style={{ borderWidth: 0.7, borderColor: isEnabled ? 'red' : 'white' }} value={isEnabled} onValueChange={toggleSwitch}
            size={'sm'} offTrackColor="red" onTrackColor="red.900" onThumbColor="white" offThumbColor="red" /> :
            <Icon as={MaterialCommunityIcons} size={8} name="chevron-right" color="#ff0000" onPress={onPress} style={{ alignSelf: 'flex-end' }} />
          }
        </Box>
      </HStack>
      <Divider maxW={600} style={{ backgroundColor: 'grey', height: 0.5, width: '92%', alignSelf: 'center', marginTop: 5 }} />
    </Pressable >
  )
};

export default MenuItem