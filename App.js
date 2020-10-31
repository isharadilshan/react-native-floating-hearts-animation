import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimatedScreen from './src/components/heart/AnimatedScreen';

const App = () => {

  return (
    <View style={styles.parentContainer}>
      <AnimatedScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'rgb(245,249,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
