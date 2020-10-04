import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Heart = (props) => {
  const {customStyle, iconColor = 'black'} = props;
  return (
    <View style={[styles.heart, customStyle]}>
      <Icon
        name="heart-multiple"
        size={30}
        style={styles.icon}
        color={iconColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default Heart;
