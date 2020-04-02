import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageSoure, rate }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSoure} />
      <Text style={styles.title}>{title}</Text>
      <Text>{rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "coral",
    marginBottom: 1
  },
  image: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 26,
    marginHorizontal: 10
  }
});

export default ImageDetail;
