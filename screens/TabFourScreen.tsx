import React from 'react';
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Text, Box, Divider, Button, Icon } from 'native-base';
import { RootTabScreenProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const { width, height } = Dimensions.get('window');
const heading = "Spider-Man Suit\nSocial Lens"
const socials = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/fbcameraeffects/tryit/2946425509003918/'
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/ar/2946425509003918/'
  },
  {
    name: 'snapchat',
    link: 'https://lens.snapchat.com/65bddaabb7c34b5db51f293936370e1c'
  },

]
function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {
  return (

    <ImageBackground style={styles.container}
      source={require('../assets/images/Spider-ARs-bg.jpg')} >
      <SafeAreaView style={styles.safeCont} >
        <Box style={styles.midCont}>

          <Text style={styles.title}>{heading}</Text>
          <Divider style={styles.divider} />
          <Text
            style={styles.selfieText}>
            Take selfies while wearing Spider-Mans iconic suit. Select your preferred social platform below to get started.
          </Text>
          {socials.map(social =>
            <Button variant={'outline'} mb={2} ml={5}
              style={{ borderColor: 'red' }}
              onPress={() => Linking.openURL(social.link)}
              colorScheme="danger" width={widthPixel(170)}
              _text={{
                color: '#fff'
              }}
              leftIcon={<Icon as={FontAwesome} name={social.name} size="sm" color={'#fff'} />}>
              {social.name.toUpperCase()}
            </Button>
          )}
        </Box>
      </SafeAreaView >
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  safeCont: {
    height: height,
    width: width,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  divider: {
    backgroundColor: 'red',
    width: 100,
    marginLeft: 15,
    marginBottom: 15,
    marginTop: 10
  },
  midCont: {
    flexDirection: 'column',
    //alignItems: 'center',

    ///
    flex: 1,
    justifyContent: 'flex-end', paddingBottom: 40, paddingHorizontal: 20
  },
  title: {
    color: 'white',
    paddingTop: width >= 531 ? '8%' : 30,
    fontSize: fontPixel(20),
    fontWeight: '300',
    textAlign: 'left',
    fontFamily: 'Noize-Sport',
    textTransform: 'uppercase',
    letterSpacing: 3,
    lineHeight: 35,
    marginVertical: width >= 531 ? 30 : '3%',
    marginTop: width >= 531 ? '10%' : '70%',
    marginLeft: 15
  },
  selfieText: {
    marginLeft: 15,
    marginBottom: 20,
    color: 'white',
    fontSize: fontPixel(16),
    fontWeight: '400',
    paddingTop: 20
  }
});

export default TabFourScreen