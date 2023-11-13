import React, { useEffect, useRef, useState } from "react";
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

export const Todo = () => {
  const textInputRef = useRef<TextInput>(null);
  const [todo, setTodo] = useState<boolean>(true);
  const [toDoList, setToDoList] = useState<any>({});
  const [text, setText] = useState<string>("");
  const [editText, setEditText] = useState<string>("");

  // 입력
  const onSubmitToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDoList = { [Date.now()]: { text, todo }, ...toDoList };
    setToDoList(newToDoList);
    await save(newToDoList);
    setText("");
  };

  // 저장
  const save = async (toSave: any) => {
    await AsyncStorage.setItem("toDos", JSON.stringify(toSave));
  };

  // 불러오기
  useEffect(() => {
    load();
  }, []);
  const load = async () => {
    const s = await AsyncStorage.getItem("toDos");
    if (s) {
      setToDoList(JSON.parse(s));
    }
  };

  //수정 버튼 클릭
  const onClickEdit = (key: string | number) => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
    const newToDoList = { ...toDoList };
    newToDoList[key].isEdit = true;
    setToDoList(newToDoList);
    setEditText(newToDoList[key].text);
  };

  // 수정
  const onClickSave = (key: string | number) => {
    const newToDoList = { ...toDoList };
    newToDoList[key].text = editText;
    newToDoList[key].isEdit = false;
    setToDoList(newToDoList);
    setEditText("");
  };

  // 삭제
  const onClickDelete = (key: string | number) => {
    const newToDoList = { ...toDoList };
    delete newToDoList[key];
    setToDoList(newToDoList);
    save(newToDoList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setTodo(true);
          }}
        >
          <Text
            style={{
              ...styles.btnText,
              color: todo ? theme.point : theme.grey,
            }}
          >
            ToDo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTodo(false);
          }}
        >
          <Text
            style={{
              ...styles.btnText,
              color: !todo ? theme.point : theme.grey,
            }}
          >
            Shopping
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={
          todo ? "할 일을 입력해주세요" : "구매할 물건을 입력해주세요"
        }
        onChangeText={setText}
        onSubmitEditing={onSubmitToDo}
        blurOnSubmit={false}
      />
      <ScrollView>
        {Object.keys(toDoList).map(
          (key: any) =>
            todo === toDoList[key].todo && (
              <View style={styles.toDo} key={key}>
                {toDoList[key].isEdit ? (
                  <TextInput
                    ref={textInputRef}
                    onChangeText={setEditText}
                    value={editText}
                    style={styles.toDoEdit}
                  />
                ) : (
                  <Text style={styles.toDoText}>{toDoList[key].text}</Text>
                )}

                <View style={styles.toDoIcon}>
                  {toDoList[key].isEdit ? (
                    <TouchableOpacity
                      style={{ marginRight: 10 }}
                      onPress={() => onClickSave(key)}
                    >
                      <Icon name="save-outline" size={22} color="black" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={{ marginRight: 10 }}
                      onPress={() => onClickEdit(key)}
                    >
                      <Icon name="create-outline" size={22} color="black" />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity onPress={() => onClickDelete(key)}>
                    <Icon name="trash-outline" size={22} color="black" />
                  </TouchableOpacity>
                </View>
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
    marginTop: 80,
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
    borderBottomLeftRadius: 0,

    marginVertical: 20,
    fontSize: 18,
  },

  toDo: {
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,

    borderRadius: 30,
    borderBottomLeftRadius: 0,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  toDoEdit: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "black",
  },
  toDoIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
