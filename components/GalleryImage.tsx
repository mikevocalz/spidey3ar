import React, { useState } from 'react';
import { Image, Pressable, Spinner } from 'native-base';
import { Dimensions, ImageProps } from 'react-native';
import { heightPixel } from '../normalize';

interface GalleryProps {
  uri: ImageProps['source'],
  index: number,
  // onPress: (index: number) => void,
  onPress: () => void,

}

const { width, height } = Dimensions.get('window');
const imgHeight = width >= 541 ? (height / 4.75) : (height / 5.6)
const GalleryImage = ({ uri, index, onPress }: GalleryProps) => {

  const [loading, setLoading] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#24292e'
      }}
    >
      {
        loading && <Spinner accessibilityLabel="Loading Image"
          color="#fff" size={'lg'}
          style={{
            position: 'absolute',
            height: imgHeight,
            left: 0,
            top: 0,
            width: width / 3,
          }}
        />
      }
      <Image
        alt={'Gallery Photo'}
        source={uri}
        onLoadStart={() => { setLoading(true) }}
        onLoadEnd={() => { setLoading(false) }}
        style={{
          height: imgHeight,
          left: 0,
          resizeMode: 'cover',
          top: 0,
          width: width / 3,
        }}
      />

    </Pressable>
  )
}

export default GalleryImage