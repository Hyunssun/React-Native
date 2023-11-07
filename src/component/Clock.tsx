import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const koreanTime = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now);

      setCurrentTime(koreanTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Text style={styles.digitalClock}>{currentTime}</Text>;
};

const styles = StyleSheet.create({
  digitalClock: {
    margin: 20,
    fontSize: 48,
  },
});
