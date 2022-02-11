import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Defs,
  Path,
  ClipPath,
  Polygon,
  Polyline,
  Use,
  Image,
  ForeignObject
} from "react-native-svg";
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { fontPixel, heightPixel, widthPixel } from '../normalize';
import { Pressable, Divider, Box, Text, Button } from "native-base";

/* SVGR has dropped some elements not supported by react-native-svg: style */

interface SVGRProps {
  titleOne?: string;
  titleTwo?: string;
  titleSM?: string;
  img: any;
  onPress: () => void
}

const { width, height } = Dimensions.get('screen')
const labelOne = 'Peter Parker\'s\nPhone'
const FeedItem = ({ titleSM, titleOne, titleTwo, img, onPress, ...props }: SvgProps & SVGRProps) => (
  < Pressable onPress={onPress} style={{
    flex: 1, width: width, height: width * .98,
    marginBottom: heightPixel(70),
  }} >

    <Box style={{ position: 'absolute', left: 35, top: width * .80, width: width, height: width * 1.17, zIndex: 10 }}>
      <Text numberOfLines={2} style={{
        textAlign: 'left',
        color: 'white', fontSize: fontPixel(20), fontFamily: 'Noize-Sport',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textTransform: 'uppercase',
      }}>{labelOne}</Text>
      <Divider style={styles.divider} />


      <Box style={{
        flexDirection: 'row',
        width: width - 70,
        justifyContent: 'space-between'
      }}>
        <Text style={{
          color: '#fff', fontWeight: '300',
          alignSelf: 'flex-start', width: '60%',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10
        }}>
          {titleSM}
        </Text>

        <Button style={{ alignSelf: 'flex-end', borderColor: 'red' }}
          variant={'outline'} mb={2} ml={2} size="xs"
          disabled
          colorScheme="danger" width={widthPixel(110)}
          _text={{
            fontSize: fontPixel(10),
            color: '#fff',
            fontFamily: 'Noize-Sport',
            textTransform: 'uppercase',
          }}
        >
          ACCESS NOW
        </Button>
      </Box>
    </Box>
    <Svg
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2344.79 1241.58"
      style={{
        aspectRatio: 2344.79 / 1241.58,
        width: width,
        height: width * 1.17,
        marginBottom: heightPixel(70),
        marginLeft: '3.5%',
        alignSelf: 'center'
      }}
    >


      <Defs>
        <ClipPath id="clip-path" transform="translate(625.18 -17.51)">
          <Polygon
            points="1019 1252.2 741.2 1252.2 715.9 1231.3 72.2 1231.3 40.5 1205.4 40.5 26.3 311.4 26.3 341.6 47.3 997.1 50.2 1019 84.3 1019 1252.2"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <Polyline
        points="665.18 3.49 1340.58 3.49 1362.08 30.79"
        fill="none"
        stroke="#f90"
        strokeMiterlimit={10}
        strokeWidth={6.98}
      />
      <Polyline
        points="942.48 27.79 1622.18 27.79 1643.08 65.79"
        fill="none"
        stroke="#f90"
        strokeMiterlimit={10}
        strokeWidth={7.08}
      />
      <Polyline
        points="665.68 1186.99 697.78 1218.19 1341.08 1218.19 1363.48 1234.69 1644.18 1234.69"
        fill="none"
        stroke="#f90"
        strokeMiterlimit={10}
        strokeWidth={6.98}
      />

      <G clipPath="url(#clip-path)">

        <G id="tVrREd">

          <Image
            id="tVrREd-2"
            data-name="tVrREd"
            width={4594}
            height={2421}
            transform="translate(0 3.94) scale(0.51)"
            xlinkHref={img}
            style={{
              isolation: "isolate",
            }}
          />
        </G>
      </G>
      <Polygon
        id="SVGID"
        points="1644.18 1234.69 1366.38 1234.69 1341.08 1213.79 697.38 1213.79 665.68 1187.89 665.68 8.79 936.58 8.79 966.78 29.79 1622.28 32.69 1644.18 66.79 1644.18 1234.69"
        fill="none"
        stroke="#f90"
        strokeMiterlimit={10}
        strokeWidth={0.97}
      />
      <Polyline
        points="1644.18 1238.09 969.78 1238.09 948.28 1217.69"
        fill="none"
        stroke="#f90"
        strokeMiterlimit={10}
        strokeWidth={6.98}
      />
    </Svg >
  </Pressable >
)
const styles = StyleSheet.create({
  divider: {
    backgroundColor: 'red',
    width: 100,
    marginLeft: 0,
    marginBottom: 7,
    marginTop: 10
  },
})

export default FeedItem
