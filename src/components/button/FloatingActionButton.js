import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fab}>
      <Icon name="add" size={30} style={styles.icon} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    right: 20,
    bottom: 30,
    backgroundColor: '#4a148c',
  },
});

export default FloatingActionButton;
