import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.props.navigation.navigate(user ? "home" : "login");
    });
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.textStyle}> Loading... </Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: { fontSize: 20, marginBottom: 20 },
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
