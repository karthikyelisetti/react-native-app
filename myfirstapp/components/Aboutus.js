import React, { useState } from "react";
import { View, Text, Button, Alert, ScrollView, TextInput } from "react-native";

const Aboutus = (props) => {
  const [value, setValue] = useState("");

  const changeText = (e) => {
    setValue(e.target.value);
    props.setName(e.target.value);
  };
  return (
    <ScrollView
      style={{
        marginTop: 100,
      }}
    >
      <Text
        style={{
          color: "red",
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Welcome to {props.name}!
      </Text>
    </ScrollView>
  );
};

export default Aboutus;
