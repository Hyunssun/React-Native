import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Clock, Weather } from "../component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Home = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Weather />
        <Clock />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
