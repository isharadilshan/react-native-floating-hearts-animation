import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Animated, Easing, View, Text} from 'react-native';
import Heart from './Heart';
import FloatingActionButton from '../button/FloatingActionButton';

const height = 800;
const animationEndY = Math.ceil(height * 0.5);
const negativeEndY = animationEndY * -1;
let heartCount = 0;

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

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
    }).start(() => {});
  },[]);

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
    <Animated.View style={[styles.heartContainer, getHeartStyle(), customStyle]}>
      <Heart/>
    </Animated.View>
  );
};

const AnimatedScreen = () => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    heartCount++;
    setHearts([
      ...hearts,
      {
        id: heartCount,
        right: getRandomNumber(30, 150),
      },
    ]);
  };

  const removeHeart = (id) => {
    setHearts(
      hearts.filter((heart) => {
        return heart.id !== id;
      }),
    );
  };

  return (
    <View style={styles.animatedScreenWrapper}>
      {
        hearts.map((heart, index) => {
          return (
            <HeartContainer
              key={index}
              customStyle={{right: heart.right}}
              onComplete={() => removeHeart(heart.id)}
            />
          );
        })
      }
      <FloatingActionButton onPress={addHeart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'rgb(245,249,255)',
  },
  heartContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent',
  },
  animatedScreenWrapper: {
    height: 250,
    width: 300,
    backgroundColor: 'pink',
  },
});

export default AnimatedScreen;
