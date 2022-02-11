import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, Text, Icon } from "native-base";
import { heightPixel, widthPixel, fontPixel } from '../normalize';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, Dimensions } from "react-native";

interface Props {

}
const { width, height } = Dimensions.get('window')
const iconSZ = width > 541 ? 9 : 7
const DateTime = (props: Props) => {

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');



  useEffect(() => {
    let interval = setInterval(() => {
      const time = moment()
        .format('h:mm a');
      setCurrentTime(time);
    }, 10000);
    return
    () => {
      clearInterval(interval);
      interval = null
    }
  }, [])

  useEffect(() => {
    let date = moment()
      .format('dddd, MMMM Do');
    setCurrentDate(date);
  }, []);



  return (
    <Box style={styles.container}>
      <Box style={styles.location}>
        <Icon as={Entypo}
          marginTop={width > 541 ? 0 : 0}
          size={iconSZ}
          name="location-pin"
          color="#fff"
        />
        <Text style={styles.locationText} >Queens, New York</Text>
      </Box>
      <Box style={styles.date}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.dateText}>{currentDate}</Text>
      </Box>
    </Box >

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: widthPixel(60),
    marginTop: heightPixel(250)
  },
  location: {
    flexDirection: 'row',
    height: heightPixel(70),
  },
  locationText: {
    fontSize: fontPixel(18),
    fontFamily: 'Noize-Sport',
    letterSpacing: 1,
    color: '#fff',
    marginTop: width > 541 ? 5 : -5,
    paddingTop: 10,
  },
  timeText: {
    fontFamily: 'digital-counter',
    textTransform: 'uppercase',
    paddingTop: width > 541 ? 80 : 40,
    marginTop: width > 541 ? -60 : -30,
    fontSize: fontPixel(60),
    color: 'white',
    marginLeft: fontPixel(5),
    letterSpacing: 2
  },
  dateText: {
    fontSize: fontPixel(20),
    color: 'white',
    paddingTop: width > 541 ? '2%' : 0,
    marginTop: width > 541 ? '2%' : 10,
  },
  date: {
    flexDirection: 'column',
    marginLeft: 10
  }
});
export default DateTime