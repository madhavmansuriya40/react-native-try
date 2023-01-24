import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Footer({ navigation }) {

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.menuItem}>All Notes</Text>
      <Text style={styles.menuItem}>Create a Note</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#fff',
    borderColor: '#202020',
    borderTopWidth: 1,
    width: '100%',
  },
  menuItem: {
    color: '#000'
  }
});
