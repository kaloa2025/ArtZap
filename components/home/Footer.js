import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>This project is made by Aalok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    zIndex:1,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop:"10%",
    marginBottom:"20%"
  },
  text: {
    color: COLORS.gray,
    fontSize: 16,
  },
});

export default Footer;
