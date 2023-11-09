import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Weather } from "../component";
import * as Location from "expo-location";
import { useRecoilState } from "recoil";
import { LocationState } from "../store/locationState";

export const Home = () => {
  const [locationState, setLocationState] = useRecoilState(LocationState);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      if (location) {
        const { latitude, longitude } = location.coords;
        const addressResponse = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        if (addressResponse && addressResponse.length > 0) {
          const city = addressResponse[0].city;
          setLocationState({
            ...locationState,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp: location.timestamp,
            city: city,
          });
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
