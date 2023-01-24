import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllNotes from "../Screens/AllNotes/AllNotes";
import Note from "../Screens/Note/Note";
import CreateNote from "../Screens/CreateNote/CreateNote";

const Stack = createNativeStackNavigator();

export default function AppNavigation({ appState }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="AllNotes" options={{ headerShown: false }}>
          {(props) => <AllNotes {...props} appState={appState} />}
        </Stack.Screen>
        
        <Stack.Screen name="Note" options={{ headerShown: false }}>
          {(props) => <Note {...props} appState={appState} />}
        </Stack.Screen>

        <Stack.Screen name="CreateNote" options={{ headerShown: false }}>
          {(props) => <CreateNote {...props} appState={appState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
