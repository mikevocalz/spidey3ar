import React from 'react';
import { StyleSheet, Platform, ImageBackground, Dimensions } from 'react-native';
import { Text, Box } from 'native-base';
import { RootTabScreenProps } from '../types';
import { fontPixel } from '../normalize';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import GalleryImage from '../components/GalleryImage';

const { width, height } = Dimensions.get('window');
export const images = [
  {
    id: 1,
    uri: require('../assets/images/gallery/IMG-3880.jpg')
  },
  {
    id: 2,
    uri: require('../assets/images/gallery/IMG-3881.jpg')
  },
  {
    id: 3,
    uri: require('../assets/images/gallery/IMG-3882.jpg')
  },
  {
    id: 4,
    uri: require('../assets/images/gallery/IMG-3883.jpg')
  },
  {
    id: 5,
    uri: require('../assets/images/gallery/IMG-3884.jpg')
  },
  {
    id: 6,
    uri: require('../assets/images/gallery/IMG-3885.jpg')
  },
  //text
  {
    id: 7,
    uri: require('../assets/images/gallery/IMG-3886.jpg')
  },
  {
    id: 8,
    uri: require('../assets/images/gallery/IMG-3887.jpg')
  },
  {
    id: 9,
    uri: require('../assets/images/gallery/IMG-3888.jpg')
  },
  {
    id: 10,
    uri: require('../assets/images/gallery/IMG-3889.jpg')
  },
  {
    id: 11,
    uri: require('../assets/images/gallery/IMG-3890.jpg')
  },
  {
    id: 12,
    uri: require('../assets/images/gallery/IMG-3891.jpg')
  },
]

function PhotosScreen({ navigation }: RootTabScreenProps<'PhotosScreen'>) {
  return (
    <ImageBackground style={styles.container}
      source={require('../assets/images/MichelleMJ.jpg')} >
      <BlurView intensity={90} tint="dark" style={[styles.blurContainer]}>
        <SafeAreaView>
          <Text style={styles.title}>Photos</Text>
          <Box style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: -25
          }}>
            {
              images.map((image, id) =>
                <GalleryImage
                  index={id}
                  key={id}
                  onPress={() => navigation.navigate('PhotoGalleryView',
                    {
                      image: image.uri,
                      images: images
                    }
                  )}
                  uri={image.uri}
                />
              )}

          </Box>
        </SafeAreaView>
      </BlurView>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    resizeMode: "cover",
    overflow: "hidden",
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 80,

  },
  title: {
    color: 'white',
    paddingTop: width >= 531 ? 60 : 30,
    fontSize: fontPixel(45),
    fontWeight: '300',
    fontFamily: 'The-Amazing-Spider-Man',
    textTransform: 'uppercase',
    textAlign: 'left',
    letterSpacing: 3,
    marginHorizontal: 20,
    marginVertical: width >= 531 ? 60 : '20%'
  },
  blurContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? 'rgba(2, 22, 86, .6)' : 'rgba(2, 22, 86, 1)',
    height: '100%',
    marginTop: Platform.OS === 'ios' ? -60 : -80
    // padding: 20,
    // justifyContent: 'center',
  },
});

export default PhotosScreen