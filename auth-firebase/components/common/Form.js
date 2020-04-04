import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Form = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export { Form };

const styles = StyleSheet.create({
  containerStyle: {
    margin: 20,
  },
});
