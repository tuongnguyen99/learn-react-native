import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Green = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Blue Screen"
        color="blue"
        onPress={() => {
          navigation.navigate("blue");
        }}
      />
      <Button
        title="Back to previous screen"
        color="grey"
        onPress={() => {
          navigation.goBack();
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

export default Green;
