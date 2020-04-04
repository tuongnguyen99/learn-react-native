import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Form, Input, Button } from "../common";
import firebase from "firebase";

export default class RegisterScreen extends Component {
  state = { fullName: "", email: "", password: "", errorMessage: null };

  handleRegister = () => {
    const { fullName, email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user.updateProfile({ displayName: fullName });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}> Create your account </Text>
        <Text style={styles.errorTextStyle}>{this.state.errorMessage}</Text>
        <Form>
          <Input
            label="Full name"
            onChangeText={(fullName) => {
              this.setState({ fullName });
            }}
          />
          <Input
            label="email"
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <Input
            label="password"
            secureTextEntry
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <Button label="Register" onPress={this.handleRegister} />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: "#fff" },
  titleStyle: {
    alignSelf: "center",
    marginVertical: 30,
    fontSize: 20,
  },
  errorTextStyle: {
    alignSelf: "center",
    color: "tomato",
    fontSize: 16,
  },
});
