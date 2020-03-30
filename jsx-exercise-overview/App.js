import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const name = "Tuong Nguyen";
  return (
    <View style={style.container}>
      <Text style={style.title}>Getting started with React Native!</Text>
      <Text style={style.paragraph}>My name is {name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontSize: 45
  },
  paragraph: {
    fontSize: 20
  }
});

export default App;
