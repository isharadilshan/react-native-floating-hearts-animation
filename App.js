import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatinActionButton from './src/components/button/FloatingActionButton';
import HeartContainer from './src/components/heart/HeartContainer';

let heartCount = 0;
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const App = () => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    setHearts([
      ...hearts,
      {
        id: heartCount,
        right: getRandomNumber(30, 60),
      },
    ]);
    heartCount++;
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.parentContainer}>
        {hearts.map((heart) => {
          return (
            <HeartContainer key={heart.id} customStyle={{right: heart.right}} />
          );
        })}
      </View>
      <FloatinActionButton onPress={addHeart} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: 'rgb(245,249,255)',
  },
});

export default App;
