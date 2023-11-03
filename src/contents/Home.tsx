import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>홈</Text>
      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Text style={styles.button_text}>버튼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Text style={styles.button_text}>버튼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Text style={styles.button_text}>버튼</Text>
        </TouchableOpacity>
      </View>
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
  button_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: "gray",
  },
  button_text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default Home;
