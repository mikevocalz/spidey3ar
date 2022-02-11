import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Box } from 'native-base';
import { RootTabScreenProps } from '../types';

function TabThreeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabThreeScreen