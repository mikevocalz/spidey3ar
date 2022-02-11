import React from 'react';
import { StyleSheet, ImageBackground, Dimensions, ImageProps } from 'react-native';
import { Text, Box, Divider, Button, Icon, VStack, HStack, Image, Pressable, ScrollView } from 'native-base';
import { RootTabScreenProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const { width, height } = Dimensions.get('window');
const titles = [
  {
    id: 1,
    title: 'About',
    link: 'https://www.spidermannowayhome.movie/synopsis/',
    uri: require('../assets/images/strange2.jpg')
  },
  {
    id: 2,
    title: 'Gallery',
    link: 'https://www.spidermannowayhome.movie/gallery/',
    uri: require('../assets/images/Peter-MJ-Ned-No-Way-Home.jpg')
  },
  {
    id: 3,
    title: 'Videos',
    link: 'https://www.spidermannowayhome.movie/trailer/',
    uri: require('../assets/images/strange1.jpg')
  }
]

interface Props {
  id: number | string,
  title: string,
  link: string,
  uri: ImageProps['source'],

}
function TabFiveScreen({ navigation }: RootTabScreenProps<'TabFive'>) {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{
        height: height,
        width: width,
        overflow: "hidden",
        flex: 1
      }}
      source={require('../assets/images/Spider-Strange-bg.jpg')} >
      <SafeAreaView style={{
        width: width,
        height: height,
      }} >


        <Box style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 5, paddingHorizontal: 10 }}>
          <Text style={styles.title}>The Film</Text>
          <Divider style={styles.divider} />
          {titles.map(({ id, title, link, uri }: Props) =>
            <Pressable key={id}
              onPress={() =>
                navigation.navigate('DetailsWebView', {
                  link: link
                })
              } >
              <HStack bg="red.500" style={styles.listItem} >
                <Box px="0" pt="0">
                  <Image alt='no-way-himg'
                    style={{
                      flex: 1,
                      width: width / 2.5,
                      height: 120
                    }}
                    source={uri}
                  />
                </Box>
                <Box px="3" pr='3' py={width > 541 ? 10 : 2} flexDirection={'column'}>
                  <Text style={styles.smText}>
                    {id.toString().padStart(2, '0')}
                  </Text>
                  <Text py={width > 541 ? 10 : 3} style={styles.lgText}>
                    {title}
                  </Text>
                </Box>
                <Image alt={'box-img'}
                  source={require('../assets/images/tri.png')}
                  style={[styles.box, {
                    resizeMode: 'contain'
                  }]}
                />
              </HStack>
            </Pressable>
          )}
        </Box>

      </SafeAreaView>
    </ImageBackground >

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
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    paddingTop: width >= 531 ? '5%' : 20,
    fontSize: fontPixel(20),
    fontWeight: '300',
    textAlign: 'left',
    fontFamily: 'Noize-Sport',
    textTransform: 'uppercase',
    letterSpacing: 3,
    lineHeight: 35,
    marginVertical: width >= 531 ? 20 : 0,
    marginLeft: 5
  },
  smText: {
    color: 'red',
    fontSize: fontPixel(16),
    fontFamily: 'digital-counter',
    textTransform: 'uppercase',
  },
  lgText: {
    color: 'white',
    fontSize: fontPixel(26),
    fontFamily: 'Noize-Sport',
    textTransform: 'uppercase',
  },
  box: {
    position: 'absolute',
    zIndex: 100,
    right: 0,
    bottom: 0,
    height: 20,
    width: 20
  },
  listItem: {
    borderRadius: width >= 541 ? 10 : 6,
    height: width >= 541 ? 170 : 75,
    marginBottom: 12,
    overflow: 'hidden',
    backgroundColor: '#333333'
  }
});

export default TabFiveScreen