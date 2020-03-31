import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Red = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Green Screen"
        color="green"
        onPress={() => {
          navigation.navigate("green");
        }}
      />
      <Button
        title="Go to Blue Screen"
        color="blue"
        onPress={() => {
          navigation.navigate("blue");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});

export default Red;
