import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

let a1 = require("../../public/image/laptop/1.jpg");
let a2 = require("../../public/image/laptop/2.jpg");
let a3 = require("../../public/image/laptop/3.jpg");
let a4 = require("../../public/image/laptop/4.jpg");
let a5 = require("../../public/image/laptop/5.jpg");
let a6 = require("../../public/image/laptop/6.jpg");
let a7 = require("../../public/image/laptop/7.jpg");
let a8 = require("../../public/image/laptop/8.jpg");
let a9 = require("../../public/image/laptop/9.jpg");

import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const Gallery = () => {
  const handleButtonPress = () => {
    console.log(`누름`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>갤러리</Text>

      <View style={styles.image_container}>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a3} />
        </TouchableOpacity>
      </View>
      <View style={styles.image_container}>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a4} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a5} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a6} />
        </TouchableOpacity>
      </View>
      <View style={styles.image_container}>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a7} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a8} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image} source={a9} />
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
  image: {
    width: 100,
    height: 100,
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

export default Gallery;
