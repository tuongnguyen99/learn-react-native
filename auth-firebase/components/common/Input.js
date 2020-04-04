import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Input = ({ label, secureTextEntry, onChangeText }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };

const styles = StyleSheet.create({
  containerStyle: {
    marginVertical: 10,
  },
  labelStyle: {
    color: "#6f6f6f",
    fontSize: 12,
    textTransform: "uppercase",
  },
  inputStyle: {
    borderBottomColor: "#aaa",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 16,
  },
});
