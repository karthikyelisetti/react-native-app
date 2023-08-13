import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Aboutus from "./components/Aboutus";
import { useState } from "react";
import Login from "./components/Login";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState("HeroVired");
  return (
    // <View style={styles.container}>
    //   <Login name={name} setName={setName}></Login>
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="About" component={Aboutus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
