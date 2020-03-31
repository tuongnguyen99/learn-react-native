import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Red from "./src/screens/Red";
import Green from "./src/screens/Green";
import Blue from "./src/screens/Blue";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="red" component={Red} />
        <Stack.Screen name="green" component={Green} />
        <Stack.Screen name="blue" component={Blue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
