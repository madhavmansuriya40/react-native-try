import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Note({ navigation, appState }) {
  const { note } = appState;

  const goBack = () => {
   navigation.navigate('AllNotes');
  };

  return (
    <View style={styles.container}>
      <Text>{note.noteTitle}</Text>
      <Text>{note.noteText}</Text>

      <TouchableOpacity style={styles.button} onPress={() => goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 20,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8c8c8c',
  }
});
