import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { getWeather } from "../api/WeatherAPI";
import { useRecoilState } from "recoil";
import { LocationState } from "../store/locationState";
import Icon from "react-native-vector-icons/Ionicons";

export const Weather = () => {
  const [locationState, setLocationState] = useRecoilState(LocationState);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    console.log(`locationState`, locationState);
    if (locationState.city !== "") {
      fetchWeatherData();
    }
  }, [locationState, refresh]);

  const fetchWeatherData = async () => {
    const data = await getWeather(locationState.city);
    setWeatherData(data);
    console.log(data);
  };

  const onClickButton = () => {
    setRefresh(!refresh);
  };

  return (
    <View style={styles.container}>
      {weatherData === null ? (
        <View style={styles.loading}>
          <ActivityIndicator
            color="white"
            style={{ marginTop: 10 }}
            size="large"
          />
        </View>
      ) : (
        <View style={styles.weather_container}>
          <TouchableOpacity
            style={styles.icon_container}
            onPress={() => {
              onClickButton();
            }}
          >
            <Icon name="refresh-circle-outline" size={50} color="white" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.weather_container_name}>
              {locationState.city}
            </Text>
          </View>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
              }}
            />
          </View>
          <Text style={styles.weather_container_temp}>
            {Math.round(weatherData.main.temp)}°C
          </Text>
          <Text style={styles.weather_container_description}>
            {weatherData.weather[0].description}
          </Text>

          <Text style={styles.weather_container_text}>
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
    backgroundColor: "skyblue",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weather_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  weather_container_name: {
    color: "white",
    fontSize: 60,
  },
  weather_container_temp: {
    color: "white",
    fontSize: 90,
  },
  weather_container_description: {
    color: "white",
    fontSize: 30,
  },
  weather_container_text: {
    color: "white",
    fontSize: 20,
  },
  icon_container: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image_container: {},

  image: {
    width: 200,
    height: 200,
  },
});
