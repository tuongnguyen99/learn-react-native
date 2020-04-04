import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";
import LoadingScreen from "./components/screens/LoadingScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import HomeScreen from "./components/screens/HomeScreen";

const Stack = createStackNavigator();
const firebaseConfig = {
  ///
};

firebase.initializeApp(firebaseConfig);

function appStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="loading" component={LoadingScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>{appStack()}</NavigationContainer>;
}
