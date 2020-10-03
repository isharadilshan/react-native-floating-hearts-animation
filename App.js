import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FloatinActionButton from './src/components/FloatingActionButton';

const App = () => {
  return (
    <View style={styles.parentContainer}>
      <Text>Home page</Text>
      <FloatinActionButton
        onPress={() => {
          console.log('cabvkjdavwdbv');
        }}
      />
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
