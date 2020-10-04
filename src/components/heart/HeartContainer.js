import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import Heart from './Heart';

const height = 800;
const animationEndY = Math.ceil(height * 0.8);
const negativeEndY = animationEndY * -1;

const HeartContainer = (props) => {
  const {customStyle, onComplete} = props;
  const position = useRef(new Animated.Value(0)).current;
  const yAnimation = position.interpolate({
    inputRange: [negativeEndY, 0],
    outputRange: [animationEndY, 0],
  });
  const xAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: [0, 25, 15, 0, 10],
  });
  const scaleAnimation = yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.4, 1],
    extrapolate: 'clamp',
  });
  const rotateAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg'],
  });
  const opacityAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY],
    outputRange: [1, 0],
  });

  useEffect(() => {
    Animated.timing(position, {
      duration: 1000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(onComplete);
  });

  const getHeartStyle = () => {
    return {
      transform: [
        {translateY: position},
        {translateX: xAnimation},
        {scale: scaleAnimation},
        {rotate: rotateAnimation},
      ],
      opacity: opacityAnimation,
    };
  };

  return (
    <Animated.View
      style={[styles.heartContainer, getHeartStyle(), customStyle]}>
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
