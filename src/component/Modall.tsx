import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { useRecoilState } from "recoil";
import { ModalState } from "../store/modalState";
import { laptop } from "../../public/image/laptop";

export const iconPath = {
  icon: require("../../public/image/laptop/9.jpg"),
  activeIcon: require("../../public/image/laptop/9.jpg"),
};

export const Modall = () => {
  const [modalState, setModalState] = useRecoilState(ModalState);

  const toggleModal = () => {
    setModalState({ ...modalState, open: false, num: "" });
  };

  return (
    <Modal isVisible={modalState.open}>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal}>
          <Image style={styles.image} source={modalState.num} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 300,
    height: 300,
  },
});
