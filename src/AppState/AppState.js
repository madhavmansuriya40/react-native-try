import React, { useState, useEffect } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";

export default function AppState() {
  const [allNotes, setAllNotes] = useState([
    {
        noteID: 1,
        noteTitle: "First Note Titel",
        noteText: "this is my first startup IDEA",
    },
    { 
        noteID: 2,
        noteTitle: "Second Note Title", 
        noteText: "this is somehting else" 
    },
  ]);
  const [note, setNote] = useState({});

  const appState = {
    allNotes,
    setAllNotes,
    note,
    setNote    
  }

  return <AppNavigation appState={appState}/>;
}
