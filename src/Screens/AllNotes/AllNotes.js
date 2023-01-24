import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

import Header from "../../Headers/Header";
import Footer from "../../Footers/Footer";

export default function AllNotes({ navigation, appState }) {
  const { allNotes, setNote } = appState;

  const handleNoteClick = (item) => {
    setNote(item);
    navigation.navigate("Note");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        {allNotes.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={index}
              onPress={() => handleNoteClick(item)}
            >
              <Text>{item.noteTitle}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Footer appState={appState} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 8,
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  button: {
    marginTop: 10,
    padding: 10,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderRadius: 8,
    borderColor: "#8c8c8c",

    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },
});
