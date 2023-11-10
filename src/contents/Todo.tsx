import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/Ionicons";

const STORAGE_KEY = "@toDos";

export const Todo = () => {
  const [working, setWorking] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [toDos, setToDos] = useState<any>({});

  // 입력
  const onSubmitToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = { [Date.now()]: { text, working }, ...toDos };
    console.log(newToDos);
    setToDos(newToDos);
    await save(newToDos);
    setText("");
  };

  // 저장
  const save = async (toSave: any) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  // 불러오기
  useEffect(() => {
    load();
  }, []);
  const load = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      setToDos(JSON.parse(s));
    }
  };

  // 삭제
  const onClickDelete = (key: string | number) => {
    const newToDos = { ...toDos };
    delete newToDos[key];
    setToDos(newToDos);
    save(newToDos);
    // Alert.alert("Delete To Do", "Are you sure?", [
    //   { text: "Cancel" },
    //   {
    //     text: "I'm Sure",
    //     style: "destructive",
    //     onPress: () => {
    //       const newToDos = { ...toDos };
    //       delete newToDos[key];
    //       setToDos(newToDos);
    //       save(newToDos);
    //     },
    //   },
    // ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setWorking(true);
          }}
        >
          <Text
            style={{
              ...styles.btnText,
              color: working ? theme.point : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setWorking(false);
          }}
        >
          <Text
            style={{
              ...styles.btnText,
              color: !working ? theme.point : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={working ? "Add a To Do" : "Where do you want to go?"}
        onChangeText={(val) => setText(val)}
        onSubmitEditing={onSubmitToDo}
        blurOnSubmit={false}
      />
      <ScrollView>
        {Object.keys(toDos).map(
          (key: any) =>
            working === toDos[key].working && (
              <View style={styles.toDo} key={key}>
                <Text style={styles.toDoText}>{toDos[key].text}</Text>
                <TouchableOpacity onPress={() => onClickDelete(key)}>
                  <Icon name="trash-outline" size={22} color="white" />
                </TouchableOpacity>
              </View>
            )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },

  toDo: {
    backgroundColor: theme.todo,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
