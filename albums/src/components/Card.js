import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});
