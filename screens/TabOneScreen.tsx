import React from 'react';
import { StyleSheet, ImageBackground, Dimensions, Platform } from 'react-native';
import { Text, Box, Image, } from 'native-base';
import { RootTabScreenProps } from '../types';
import FeedItem from '../components/FeedItem';
import FeedButton from '../components/FeedButton';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { ScrollView } from 'moti'
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import ModalScreen from './ModalScreen';

const { width, height } = Dimensions.get('screen')

const btnData = [
  {
    id: 1,
    text: 'Access Peter Parker\'s texts, photos, and ModalScreen.',
    img: require('../assets/images/Spider-Man-Phone.jpg'),
    onPress: 'TabTwoScreen'
  },
  {
    id: 2,
    text: 'Check out Spider-Man\'s suits up close in AR.',
    img: require('../assets/images/AR-explorer.jpg'),
    onPress: null
  },
  {
    id: 3,
    text: 'Take selfies while wearing Spider-Man\'s iconic SubmitEvent.',
    img: require('../assets/images/Spider-Man-Socials.jpg'),
    onPress: 'TabFourScreen'
  },
  {
    id: 4,
    text: 'Learn more about the film and explore photos and videos.',
    img: require('../assets/images/Spider-Strange-bg2.jpg'),
    onPress: 'TabFiveScreen'
  },
]
function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const focused = useIsFocused()


  return focused && (
    <>
      <ImageBackground
        style={{
          height: height,
          width: width,
          //flex: 1,
        }}
        imageStyle={{
          resizeMode: 'cover',
          height: height,
          width: width,
        }} source={require('../assets/images/sbackground.jpg')} >

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          from={{
            opacity: 0,
            translateX: width - 20
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          exit={{
            opacity: 0,
            translateX: width + 120,
          }}
          exitTransition={{
            type: 'timing',
            duration: 500,
            delay: 50,
          }}
          transition={{
            type: 'timing',
            duration: 1000,
            delay: 100,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          style={{
            flex: 1,
            height: '100%',
            paddingHorizontal: 6,
          }}>
          <Image alt='SNWH-Logo' style={{ resizeMode: 'contain', height: heightPixel(200), width: widthPixel(310) }}
            source={require('../assets/images/snwo-logo.png')} />
          <Text adjustsFontSizeToFit
            minimumFontScale={0.1} style={styles.title}>In Theaters Now</Text>
          <Box style={styles.btnContainer} >
            <FeedButton btnName='email'
              width={width / 2.05}
              title={'Exclusive\nContent'}
              subTitle='Get Updates &'
              source={require('../assets/images/spider-man-bridge.jpg')}
              onPress={() => navigation.navigate('DetailsWebView', {
                link: 'https://secure.sonypictures.com/registration/?property=spidermannowayhome&uri=/sites/default/files/2021-12/spidermannowayhome_keyart_1400x2100_v2.jpg&gpmsid=11166654',
              })}
            />
            <FeedButton btnName='ticket'
              width={width / 2.05}
              title={'Get\nTickets'}
              subTitle={'\t'}
              source={require('../assets/images/doc-oc.jpg')}
              onPress={() => Linking.openURL('https://www.spidermannowayhome.movie/?utm_source=mobile_app&utm-medium=get-tickets-btn')}
            />
          </Box>


          {/* Feed */}
          <Box style={{ marginTop: 30, }}>
            {btnData.map((item, i) => (
              <FeedItem
                key={i}
                img={item.img}
                width={width * 2.19}
                titleSM={item.text}
                onPress={() => navigation.navigate(item.onPress)} />
            )
            )}
          </Box>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 300,
    paddingTop: Platform.OS === 'android' ? 100 : 0
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 18,
    height: width / 3,
    // backgroundColor: 'blue',
    marginTop: -30,
    paddingVertical: 20
  },
  title: {
    marginTop: width >= 541 ? 10 : '-10%',
    zIndex: 10,
    fontSize: fontPixel(28),
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 20,
    marginBottom: 10
  },

});

export default TabOneScreen