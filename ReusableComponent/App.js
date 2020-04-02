import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import data from "./data.json";

import ImageDetail from "./src/components/ImageDetail";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <ImageDetail title={data[0].name} imageSoure={{ uri: data[0].src }} />
      <ImageDetail title={data[1].name} imageSoure={{ uri: data[1].src }} />
      <ImageDetail title={data[2].name} imageSoure={{ uri: data[2].src }} />
      <ImageDetail title={data[3].name} imageSoure={{ uri: data[3].src }} />
      <ImageDetail title={data[4].name} imageSoure={{ uri: data[4].src }} />
      <ImageDetail title={data[5].name} imageSoure={{ uri: data[5].src }} />
      <ImageDetail title={data[6].name} imageSoure={{ uri: data[6].src }} />
      <ImageDetail title={data[7].name} imageSoure={{ uri: data[7].src }} />
      <ImageDetail title={data[8].name} imageSoure={{ uri: data[8].src }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
