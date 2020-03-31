import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Blue = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Red Screen"
        color="red"
        onPress={() => {
          navigation.navigate("red");
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
    backgroundColor: "blue"
  }
});

export default Blue;
