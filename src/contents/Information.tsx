import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const arr = [
  {
    title: "One UI 버전",
    text: "5.1",
  },
  {
    title: "안드로이드 버전",
    text: "13",
  },
  {
    title: "Google Play 시스템 업데이트",
    text: "2023년 5월 1일",
  },
  {
    title: "안드로이드 보안 패치 수준",
    text: "2023년 8월 1일",
  },
  {
    title: "One UI 버전",
    text: "5.1",
  },
  {
    title: "안드로이드 버전",
    text: "13",
  },
  {
    title: "Google Play 시스템 업데이트",
    text: "2023년 5월 1일",
  },
  {
    title: "안드로이드 보안 패치 수준",
    text: "2023년 8월 1일",
  },
  {
    title: "One UI 버전",
    text: "5.1",
  },
  {
    title: "안드로이드 버전",
    text: "13",
  },
  {
    title: "Google Play 시스템 업데이트",
    text: "2023년 5월 1일",
  },
  {
    title: "안드로이드 보안 패치 수준",
    text: "2023년 8월 1일",
  },
  {
    title: "One UI 버전",
    text: "5.1",
  },
  {
    title: "안드로이드 버전",
    text: "13",
  },
  {
    title: "Google Play 시스템 업데이트",
    text: "2023년 5월 1일",
  },
  {
    title: "안드로이드 보안 패치 수준",
    text: "2023년 8월 1일",
  },
];

export const Information = () => {
  return (
    <ScrollView style={styles.container}>
      {arr.map((item: any) => {
        return (
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  info: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
    margin: 5,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});
