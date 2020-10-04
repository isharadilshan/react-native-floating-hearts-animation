import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import Heart from './Heart';

const HeartContainer = (props) => {
  const {customStyle} = props;
  console.log('HEART ID ------->>>>>>>>>>>>>>>>>>>>>>.', props);
  return (
    <Animated.View style={[styles.heartContainer, customStyle]}>
      <Heart />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent',
  },
});

export default HeartContainer;
