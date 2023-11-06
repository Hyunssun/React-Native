import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Information = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>정보</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 40,
  },
  image: {
    width: 100,
    height: 100,
    margin: 15,
  },
  image_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
});
