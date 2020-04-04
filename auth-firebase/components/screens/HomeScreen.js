import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import firebase from "firebase";
import { Form, Button } from "../common";

export default class HomeScreen extends Component {
  state = {
    email: "",
    displayName: "",
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  handleLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.greeting}>Hello {this.state.displayName} !</Text>
        <Form>
          <Button label="Sign out" onPress={this.handleLogout} />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: { flex: 1, justifyContent: "center" },
  greeting: {
    alignSelf: "center",
    fontSize: 18,
  },
});
