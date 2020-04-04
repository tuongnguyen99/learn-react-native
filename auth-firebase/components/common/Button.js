import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export { Button };

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#eb3472",
    borderRadius: 4,
    marginVertical: 10,
  },
  labelStyle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    alignSelf: "center",
    paddingVertical: 10,
  },
});
