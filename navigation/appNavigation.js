import { View, Text, LogBox } from "react-native";
import React from "react";

//Nav
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens
import HomeScreen from "../screens/HomeScreen";

LogBox.ignoreAllLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function appNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
