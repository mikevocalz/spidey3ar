import React from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import { Text, Box, Spinner, Center, IconButton, HStack } from 'native-base';
import Carousel from 'react-native-reanimated-carousel';
import { RootTabScreenProps } from '../types';
import { heightPixel, widthPixel, fontPixel } from '../normalize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';

import { images } from './PhotosScreen';

const { height, width } = Dimensions.get('window');

interface GalleryProps {
  image: any,
  route: any,
  navigation: any
}
const PhotoGalleryView = ({ image, navigation, route }: GalleryProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        pagingEnabled={true}
        width={width}
        height={height}
        data={images}
        enableSnap={true}

        renderItem={({ index }) =>
          <ImageZoom
            activityIndicatorProps={{
              style: styles.loader,
              color: 'white',
              size: "large"
            }}

            alt={'Gallery Photos'}
            source={route.params.image}
            style={{
              resizeMode: 'contain',
              width: width,
              height: height
            }}
          />
        }
      />
      <HStack
        style={{
          zIndex: 100,
          alignItems: 'center',
          alignSelf: 'center',
          height: heightPixel(50),
          width: width,
          position: 'absolute',
          bottom: 0,
          right: 0,
          justifyContent: "flex-end",
          backgroundColor: 'transparent'
        }} >
        <Center>
          <IconButton
            size={'md'}
            variant="solid"
            bg={'rgba(0,0,0, 0.3)'}
            style={{
              marginHorizontal: 20,
              marginVertical: 30
            }}
            _icon={{
              as: Feather,
              name: "upload",
              alignSelf: 'flex-end',
            }}
          />
        </Center>
      </HStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    alignItems: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
});

export default PhotoGalleryView