import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import HeartContainer from '../heart/HeartContainer';
import FloatingActionButton from '../button/FloatingActionButton';

let heartCount = 0;

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const JournalCard = () => {

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
    <View style={styles.cardWrapper}>
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
  )
};

const styles = StyleSheet.create({
  cardWrapper: {
    height: 250,
    width: 300,
    backgroundColor: 'pink',
  }
});

export default JournalCard;
