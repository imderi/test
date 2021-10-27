import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/home/home.screen";
import { TaskEditorScreen } from "../screens/taskEditor/taskEditor.screen";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Home"
        options={{ title: "Todo App" }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="TaskEditor"
        options={{
          title: "Task Editor",
          headerBackTitle: "Back",
          headerTintColor: "black",
        }}
        component={TaskEditorScreen}
      />
    </Stack.Navigator>
  );
};
