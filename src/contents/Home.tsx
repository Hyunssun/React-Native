import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { useRecoilState } from "recoil";
import { LocationState } from "../store/locationState";
import { getWeather } from "../api/WeatherAPI";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../colors";

export const Home = () => {
  const [locationState, setLocationState] = useRecoilState(LocationState);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  // 위치 받아오기
  useEffect(() => {
    if (locationState.city === "") {
      getLocation();
    }
  }, [locationState, refresh]);
  const getLocation = async () => {
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
  };

  // 날씨 받아오기
  useEffect(() => {
    if (locationState.city !== "") {
      fetchWeatherData();
    }
  }, [locationState, refresh]);
  const fetchWeatherData = async () => {
    const data = await getWeather(locationState.city);
    setWeatherData(data);
  };

  // 새로고침
  const onClickButton = () => {
    setRefresh(!refresh);
  };

  return (
    <View style={styles.container}>
      {weatherData === null ? (
        <View style={styles.container2}>
          <ActivityIndicator
            color="white"
            style={{ marginTop: 10 }}
            size="large"
          />
        </View>
      ) : (
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => {
              onClickButton();
            }}
          >
            <Icon name="refresh-circle-outline" size={50} color={theme.grey} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: theme.grey, fontSize: 60 }}>
              {locationState.city}
            </Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
              }}
            />
          </View>
          <Text style={{ color: theme.grey, fontSize: 90 }}>
            {Math.round(weatherData.main.temp)}°C
          </Text>
          <Text style={{ color: theme.grey, fontSize: 30 }}>
            {weatherData.weather[0].description}
          </Text>

          <Text style={{ color: theme.grey, fontSize: 20 }}>
            {Math.floor(weatherData.main.temp_max)}°&nbsp;/&nbsp;
            {Math.floor(weatherData.main.temp_min)}° &nbsp;&nbsp; 체감
            온도&nbsp;&nbsp;
            {Math.floor(weatherData.main.feels_like)}°
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
