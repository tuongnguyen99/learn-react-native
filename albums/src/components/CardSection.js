import React from "react";
import { StyleSheet, View } from "react-native";

const CardSection = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export default CardSection;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "relative"
  }
});
