import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { theme } from "../colors";

let a1 = require("../../public/image/laptop/1.jpg");
let a2 = require("../../public/image/laptop/2.jpg");
let a3 = require("../../public/image/laptop/3.jpg");
let a4 = require("../../public/image/laptop/4.jpg");
let a5 = require("../../public/image/laptop/5.jpg");
let a6 = require("../../public/image/laptop/6.jpg");
let a7 = require("../../public/image/laptop/7.jpg");
let a8 = require("../../public/image/laptop/8.jpg");
let a9 = require("../../public/image/laptop/9.jpg");

export const Gallery = () => {
  const [choiceImage, setChoiceImage] = useState<any>(
    require("../../public/image/laptop/1.jpg")
  );

  const onClickButton = (imageName: any) => {
    setChoiceImage(imageName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.select_container}>
        <Image style={styles.select_image} source={choiceImage} />
      </View>
      <ScrollView horizontal contentContainerStyle={styles.imageList_container}>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a1);
          }}
        >
          <Image style={styles.image} source={a1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a2);
          }}
        >
          <Image style={styles.image} source={a2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a3);
          }}
        >
          <Image style={styles.image} source={a3} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a4);
          }}
        >
          <Image style={styles.image} source={a4} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a5);
          }}
        >
          <Image style={styles.image} source={a5} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a6);
          }}
        >
          <Image style={styles.image} source={a6} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a7);
          }}
        >
          <Image style={styles.image} source={a7} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a8);
          }}
        >
          <Image style={styles.image} source={a8} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a9);
          }}
        >
          <Image style={styles.image} source={a9} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a1);
          }}
        >
          <Image style={styles.image} source={a1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a2);
          }}
        >
          <Image style={styles.image} source={a2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a3);
          }}
        >
          <Image style={styles.image} source={a3} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a4);
          }}
        >
          <Image style={styles.image} source={a4} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a5);
          }}
        >
          <Image style={styles.image} source={a5} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a6);
          }}
        >
          <Image style={styles.image} source={a6} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a7);
          }}
        >
          <Image style={styles.image} source={a7} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a8);
          }}
        >
          <Image style={styles.image} source={a8} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a9);
          }}
        >
          <Image style={styles.image} source={a9} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a1);
          }}
        >
          <Image style={styles.image} source={a1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a2);
          }}
        >
          <Image style={styles.image} source={a2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a3);
          }}
        >
          <Image style={styles.image} source={a3} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a4);
          }}
        >
          <Image style={styles.image} source={a4} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a5);
          }}
        >
          <Image style={styles.image} source={a5} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a6);
          }}
        >
          <Image style={styles.image} source={a6} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a7);
          }}
        >
          <Image style={styles.image} source={a7} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a8);
          }}
        >
          <Image style={styles.image} source={a8} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a9);
          }}
        >
          <Image style={styles.image} source={a9} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a1);
          }}
        >
          <Image style={styles.image} source={a1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a2);
          }}
        >
          <Image style={styles.image} source={a2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a3);
          }}
        >
          <Image style={styles.image} source={a3} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a4);
          }}
        >
          <Image style={styles.image} source={a4} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a5);
          }}
        >
          <Image style={styles.image} source={a5} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a6);
          }}
        >
          <Image style={styles.image} source={a6} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a7);
          }}
        >
          <Image style={styles.image} source={a7} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a8);
          }}
        >
          <Image style={styles.image} source={a8} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image_div}
          onPress={() => {
            onClickButton(a9);
          }}
        >
          <Image style={styles.image} source={a9} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.bg },

  select_container: {
    flex: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  select_image: { width: 450, height: 450 },

  imageList_container: {
    alignItems: "flex-start",
  },
  image_div: {},
  image: { width: 100, height: 100 },
});
