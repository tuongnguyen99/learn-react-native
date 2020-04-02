import React from "react";
import { StyleSheet, View } from "react-native";
import AlbumList from "./src/components/AlbumList";

export default function App() {
  return (
    <View>
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
