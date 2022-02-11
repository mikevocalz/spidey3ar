import { Box, Text, Icon, Pressable } from "native-base";
import * as React from "react"
import { StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Svg, { SvgProps, Defs, ClipPath, Image, Rect, Path, G, Polygon, ForeignObject } from "react-native-svg";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { fontPixel, heightPixel, widthPixel } from "../normalize";
import { ImageProps, ImageSourcePropType, ImageRequireSource } from "react-native";

interface SVGRProps {
  title: string;
  subTitle?: string;
  onPress?: () => void;
  source: string;
  btnName: string;
}

const { width, height } = Dimensions.get('screen')

const FeedButton = ({ title, subTitle, onPress, source, btnName, ...props }: SvgProps & SVGRProps) => (
  <Pressable onPress={onPress} >
    <Svg
      {...props}
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={"0 0 478.85 233.45"}

      style={{
        width: width / 2,
        height: width / 2.5,
        alignSelf: 'flex-start',

      }}

    >


      <Defs>
        <ClipPath id="clip-path" transform="translate(17.16 -5.19)">
          {/* <ForeignObject
        x={25}
        y={25}
        style={{
          zIndex: 100,
        }}
      >
        <Box
          style={{
            flexDirection: 'column',

            position: 'absolute',
            left: width >= 541 ? 30 : 5,
            top: width >= 541 ? 80 : 15,
            alignContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20
          }} >
          <Icon as={MaterialCommunityIcons} name={btnName} size={fontPixel(5)}
            color="#ff0000"
          />
          <Text style={{
            textAlign: 'left',
            color: 'white',
            fontFamily: 'Noize-Sport',
            fontSize: fontPixel(9),
            marginTop: width >= 541 ? '40%' : 0
          }}>{subTitle}</Text>
          <Text style={{
            textAlign: 'left',
            color: 'white',
            lineHeight: width >= 541 ? 30 : 14,
            fontFamily: 'Noize-Sport',
            fontSize: fontPixel(15),
            marginTop: width >= 541 ? '-5%' : 0,
            paddingTop: width >= 541 ? 20 : 0

          }}>{title}</Text>
        </Box>
      </ForeignObject> */}

          <Polygon
            points="406.95 230.91 5.57 230.91 5.57 12.91 431.1 12.91 431.1 211.32 406.95 230.91"
            style={{
              fill: "none",
              stroke: "#f90",
              strokeMiterlimit: 10,
              strokeWidth: "1.803328575228629px",
            }}
          />
        </ClipPath>
      </Defs>
      <G
        style={{
          clipPath: "url(#clip-path)",
        }}
      >
        <G id="_5nBRqo" data-name="5nBRqo">
          <Image
            id="_5nBRqo-2"
            data-name="5nBRqo"
            width={2000}
            height={1000}
            transform="scale(0.24 0.23)"
            xlinkHref={source}
          />
        </G>
      </G>
      <Polygon
        points="424.1 225.73 22.73 225.73 22.73 7.72 448.25 7.72 448.25 206.13 424.1 225.73"
        style={{
          fill: "none",
          stroke: "#f90",
          strokeMiterlimit: 10,
          strokeWidth: "1.803328575228629px",
        }}
      />
    </Svg >

    <Box
      style={{
        flexDirection: 'column',
        zIndex: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: width / 2,
        height: '100%',
        position: 'absolute',
        top: widthPixel(30),
        left: heightPixel(15)
      }} >
      <Icon as={MaterialCommunityIcons} name={btnName} size={fontPixel(5)}
        color="#ff0000"
      />
      <Box style={{
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        left: width >= 541 ? 30 : 5,

      }}>
        <Text style={{
          textAlign: 'left',
          color: 'white',
          fontFamily: 'Noize-Sport',
          fontSize: fontPixel(9),
          marginTop: width >= 541 ? '40%' : 0,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,
        }}>{subTitle}</Text>
        <Text style={{
          textAlign: 'left',
          color: 'white',
          lineHeight: width >= 541 ? 30 : 14,
          fontFamily: 'Noize-Sport',
          fontSize: fontPixel(15),
          marginTop: width >= 541 ? '-5%' : 0,
          paddingTop: width >= 541 ? 20 : 0,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 10,

        }}>{title}</Text>
      </Box>
    </Box>
  </Pressable>
)
export default FeedButton
