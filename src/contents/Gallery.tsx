import React from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRecoilState } from "recoil";
import { ModalState } from "../store/modalState";
import { Modall } from "../component";
import { laptop } from "../../public/image/laptop";

export const Gallery = () => {
  const [modalState, setModalState] = useRecoilState(ModalState);

  const onClickButton = (num: any) => {
    setModalState({ ...modalState, open: true, num: num });
  };

  return (
    <ScrollView style={styles.container}>
      <Modall />

      <View style={styles.image_container}>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a1);
          }}
        >
          <Image style={styles.image} source={laptop.a1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a2);
          }}
        >
          <Image style={styles.image} source={laptop.a2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a3);
          }}
        >
          <Image style={styles.image} source={laptop.a3} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a4);
          }}
        >
          <Image style={styles.image} source={laptop.a4} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a5);
          }}
        >
          <Image style={styles.image} source={laptop.a5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a6);
          }}
        >
          <Image style={styles.image} source={laptop.a6} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a7);
          }}
        >
          <Image style={styles.image} source={laptop.a7} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a8);
          }}
        >
          <Image style={styles.image} source={laptop.a8} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a9);
          }}
        >
          <Image style={styles.image} source={laptop.a9} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a1);
          }}
        >
          <Image style={styles.image} source={laptop.a1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a2);
          }}
        >
          <Image style={styles.image} source={laptop.a2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a3);
          }}
        >
          <Image style={styles.image} source={laptop.a3} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a4);
          }}
        >
          <Image style={styles.image} source={laptop.a4} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a5);
          }}
        >
          <Image style={styles.image} source={laptop.a5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a6);
          }}
        >
          <Image style={styles.image} source={laptop.a6} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a7);
          }}
        >
          <Image style={styles.image} source={laptop.a7} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a8);
          }}
        >
          <Image style={styles.image} source={laptop.a8} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a9);
          }}
        >
          <Image style={styles.image} source={laptop.a9} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a1);
          }}
        >
          <Image style={styles.image} source={laptop.a1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a2);
          }}
        >
          <Image style={styles.image} source={laptop.a2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a3);
          }}
        >
          <Image style={styles.image} source={laptop.a3} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a4);
          }}
        >
          <Image style={styles.image} source={laptop.a4} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a5);
          }}
        >
          <Image style={styles.image} source={laptop.a5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a6);
          }}
        >
          <Image style={styles.image} source={laptop.a6} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a7);
          }}
        >
          <Image style={styles.image} source={laptop.a7} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a8);
          }}
        >
          <Image style={styles.image} source={laptop.a8} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a9);
          }}
        >
          <Image style={styles.image} source={laptop.a9} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a1);
          }}
        >
          <Image style={styles.image} source={laptop.a1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a2);
          }}
        >
          <Image style={styles.image} source={laptop.a2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a3);
          }}
        >
          <Image style={styles.image} source={laptop.a3} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a4);
          }}
        >
          <Image style={styles.image} source={laptop.a4} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a5);
          }}
        >
          <Image style={styles.image} source={laptop.a5} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a6);
          }}
        >
          <Image style={styles.image} source={laptop.a6} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a7);
          }}
        >
          <Image style={styles.image} source={laptop.a7} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a8);
          }}
        >
          <Image style={styles.image} source={laptop.a8} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickButton(laptop.a9);
          }}
        >
          <Image style={styles.image} source={laptop.a9} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 90,
    height: 90,
    margin: 5,
  },
  image_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
