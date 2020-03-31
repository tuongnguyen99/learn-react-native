import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const friends = require("./friends.json");

const App = () => {
  return (
    <FlatList
      keyExtractor={item => {
        return item._id;
      }}
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <Text style={styles.text}>{`Name: ${item.name}`}</Text>
            <Text style={styles.text}>{`Age: ${item.age}`}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "grey",
    fontSize: 30,
    padding: 20,
    margin: 2,
    borderWidth: 1,
    borderRadius: 4
  },
  text: {
    color: "white",
    fontSize: 26
  }
});

export default App;
