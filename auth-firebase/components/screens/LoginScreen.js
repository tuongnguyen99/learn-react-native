import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input, Form, Button } from "../common";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleSignUpClick = () => {
    this.props.navigation.navigate("register");
  };

  handleSubmit = () => {
    this.setState({ errorMessage: null });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.greetingStytle}>
          Hello!{"\n"} Welcome to my app :
        </Text>
        <Text style={styles.errorMessageStyle}>{this.state.errorMessage}</Text>
        <Form>
          <Input
            label="Email"
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
          <Input
            label="Password"
            secureTextEntry
            onChangeText={(password) => {
              this.setState({ password });
            }}
          />
          <Button label="Login" onPress={this.handleSubmit} />
        </Form>
        <TouchableOpacity onPress={this.handleSignUpClick}>
          <Text style={styles.signUpTextStyle}>
            Have not account yet? <Text style={styles.signUpLink}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: "#fff" },
  greetingStytle: {
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 40,
    textAlign: "center",
  },
  errorMessageStyle: {
    textAlign: "center",
    color: "tomato",
  },
  signUpTextStyle: {
    alignSelf: "center",
    opacity: 0.6,
  },
  signUpLink: {
    color: "#e91e63",
  },
});
