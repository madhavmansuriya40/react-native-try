import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import Constants from 'expo-constants';

export default function Header({ navigation }) {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Startup Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    backgroundColor: '#fff',

  
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
