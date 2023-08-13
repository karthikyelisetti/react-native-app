import {React, useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function Login(props) {
  const [text, onChangeText] = useState("");
  const [btnText, setBtnText] = useState("");
  const onPress = () => setBtnText("Login Successful!!!");

  return (
    <ScrollView
      style={{
        marginTop: 240,
      }}
    >
      <Text
        style={{
          color: "red",
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        Welcome to {props.name}!
      </Text>
      <Text
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
          marginBottom: 15
        }}
      >
        Login
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="password"
        />
      </SafeAreaView>
      <TouchableHighlight onPress={onPress} style={{alignItems: "center", marginTop: 20}}>
        <View style={styles.button}>
          <Text style={{color: "white"}}>Login</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.Text}>{btnText}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    width: 150,
    borderRadius: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  Text: {
    color: '#FF00FF',
  },
});
